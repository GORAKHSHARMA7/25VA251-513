import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import products from "./data/products";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Ghaziabad");

  // ADD TO CART
  const addToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    const alreadyInWishlist = wishlist.find((item) => item.id === product.id);
    if (!alreadyInWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  // SEARCH FILTER
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <div style={{ background: "#eaeded", minHeight: "100vh", fontFamily: "Arial" }}>

        <Navbar
          cart={cart}
          wishlist={wishlist}
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
        />

        <MenuBar setSearch={setSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                filteredProducts={filteredProducts}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist wishlist={wishlist} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
