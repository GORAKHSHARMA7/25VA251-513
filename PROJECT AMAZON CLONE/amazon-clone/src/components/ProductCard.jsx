import React from "react";

function ProductCard({ product, addToCart, addToWishlist }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          background: "#ffffff",
          padding: "15px",
          borderRadius: "10px",
        }}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>{product.title}</h2>
        <h3 style={{ color: "green" }}>₹{product.price}</h3>

        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            padding: "12px",
            background: "#ffd814",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Add To Cart
        </button>

        <button
          onClick={() => addToWishlist(product)}
          style={{
            width: "100%",
            padding: "12px",
            background: "#232f3e",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ❤️ Add To Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
