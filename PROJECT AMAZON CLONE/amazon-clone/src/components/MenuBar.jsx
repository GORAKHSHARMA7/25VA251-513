import React from "react";

const menuBtn = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};

function MenuBar({ setSearch }) {
  return (
    <div
      style={{
        background: "#232f3e",
        padding: "12px 20px",
        display: "flex",
        gap: "25px",
        overflowX: "auto",
      }}
    >
      <button style={menuBtn} onClick={() => setSearch("")}>All</button>
      <button style={menuBtn} onClick={() => setSearch("iphone")}>Mobiles</button>
      <button style={menuBtn} onClick={() => setSearch("Laptop")}>Electronics</button>
      <button style={menuBtn} onClick={() => setSearch("Shoes")}>Fashion</button>
      <button style={menuBtn} onClick={() => setSearch("Watch")}>Watches</button>
      <button style={menuBtn} onClick={() => setSearch("Speaker")}>Speakers</button>
      <button style={menuBtn} onClick={() => setSearch("Camera")}>Cameras</button>
      <button style={menuBtn} onClick={() => setSearch("Backpack")}>Bags</button>
      <button style={menuBtn} onClick={() => setSearch("Headphones")}>Headphones</button>
    </div>
  );
}

export default MenuBar;
