import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cart, wishlist, search, setSearch, location, setLocation }) {
  return (
    <div
      style={{
        background: "#131921",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "15px",
        flexWrap: "wrap",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* AMAZON LOGO */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "38px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#ff9900" }}>A</span>
        mazon
        <span style={{ color: "#ff9900", fontSize: "14px", marginTop: "15px" }}>
          .in
        </span>
      </Link>

      {/* LOCATION */}
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          minWidth: "120px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#cccccc" }}>Deliver To</span>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            background: "#131921",
            color: "white",
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <option>Ghaziabad</option>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Lucknow</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          flex: "1",
          display: "flex",
          minWidth: "250px",
          maxWidth: "700px",
        }}
      >
        <input
          type="text"
          placeholder="Search Amazon Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1",
            padding: "12px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        />
        <button
          style={{
            width: "60px",
            border: "none",
            background: "#febd69",
            cursor: "pointer",
            fontSize: "20px",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          🔍
        </button>
      </div>

      {/* WISHLIST */}
      <Link
        to="/wishlist"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ❤️ Wishlist ({wishlist.length})
      </Link>

      {/* CART */}
      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        🛒 Cart ({cart.length})
      </Link>
    </div>
  );
}

export default Navbar;
