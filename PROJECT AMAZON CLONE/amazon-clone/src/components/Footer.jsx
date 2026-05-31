import React from "react";

function Footer() {
  return (
    <div style={{ background: "#131921", color: "white", marginTop: "50px" }}>
      <div
        style={{
          background: "#37475a",
          textAlign: "center",
          padding: "15px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back To Top
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "30px",
          padding: "40px",
        }}
      >
        <div>
          <h3>Get To Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div>
          <h3>Connect With Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div>
          <h3>Make Money</h3>
          <p>Sell On Amazon</p>
          <p>Affiliate</p>
          <p>Advertise</p>
        </div>
        <div>
          <h3>Help</h3>
          <p>Your Account</p>
          <p>Returns</p>
          <p>Support</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid gray",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 Amazon Clone | Made By Gorakh Sharma
      </div>
    </div>
  );
}

export default Footer;
