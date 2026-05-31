import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Cart Is Empty</h2>
      ) : (
        cart.map((item, index) => (
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
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: "10px 20px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div
        style={{
          background: "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "15px",
        }}
      >
        <h1>Total ₹{total}</h1>
      </div>
    </div>
  );
}

export default Cart;
