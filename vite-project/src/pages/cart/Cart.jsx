import React, { useEffect, useState } from "react";
import "./Cart.css";

import { Link } from "react-router";

export default function Cart() {
  const [cart, setCart] = useState([]);

  function DeleteItem(id) {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = stored.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    alert("Silindi")
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
    
  }, []);

  function Increase(id) {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = stored.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  function Decrease(id) {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = stored.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1 className="title">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="item-list">
          {cart.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.title} className="item-image" />
              <h2 className="item-title">{item.title}</h2>
              <p>${item.price}</p>

              <p>Say: {item.quantity}</p>
              <button onClick={() => DeleteItem(item.id)}>Delete</button>
              <button onClick={() => Increase(item.id)}>+</button>
              <button onClick={() => Decrease(item.id)}>-</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
