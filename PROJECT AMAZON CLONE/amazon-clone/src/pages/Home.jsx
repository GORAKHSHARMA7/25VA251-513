import React from "react";
import ProductCard from "../components/ProductCard";

function Home({ filteredProducts, addToCart, addToWishlist }) {
  return (
    <div>
      {/* HERO BANNER */}
      <div
        style={{
          width: "100%",
          minHeight: "500px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            maxWidth: "800px",
            padding: "40px",
            borderRadius: "20px",
            backdropFilter: "blur(6px)",
            background: "rgba(0,0,0,0.35)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(38px,6vw,70px)",
              marginBottom: "15px",
              color: "#ffd814",
            }}
          >
            BIG FESTIVAL SALE
          </h1>
          <p style={{ fontSize: "clamp(18px,3vw,30px)", marginBottom: "25px" }}>
            Up To 70% OFF On Electronics, Fashion, Mobiles & More
          </p>
          <button
            style={{
              background: "#ffd814",
              color: "black",
              border: "none",
              padding: "15px 35px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          padding: "30px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
