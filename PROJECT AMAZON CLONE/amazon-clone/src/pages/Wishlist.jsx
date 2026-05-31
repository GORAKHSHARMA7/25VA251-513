import React from "react";

function Wishlist({ wishlist }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>Wishlist Is Empty</h2>
      ) : (
        wishlist.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "20px",
              background: "white",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "15px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                background: "#ffffff",
                padding: "15px",
                borderRadius: "10px",
              }}
            />
            <div>
              <h2>{item.title}</h2>
              <h3 style={{ color: "green" }}>₹{item.price}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
