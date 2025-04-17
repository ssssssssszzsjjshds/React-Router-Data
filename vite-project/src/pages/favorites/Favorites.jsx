import React, { useEffect, useState } from "react";
import "./Favorites.css";
import { Link } from "react-router";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function DeleteItem(id) {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedCart = stored.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedCart));
    setFavorites(updatedCart);
    alert("Silindi")
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1 className="title">Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="item-list">
          {favorites.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.title} className="item-image" />
              <h2 className="item-title">{item.title}</h2>
              <p>${item.price}</p>
              <button onClick={() => DeleteItem(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}