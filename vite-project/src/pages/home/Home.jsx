import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToLocalStorage = (key, item) => {
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    let chosenitem = cart.find((product) => product.id === item.id);

    if (chosenitem) {
      chosenitem.quantity += 1;
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    alert("Elave Edildi")
    localStorage.setItem(key, JSON.stringify(cart));
  };

  return (
    <div className="">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <div className="button-group">
              <button
                onClick={() => addToLocalStorage("favorites", product)}
                className="btn btn-favorite"
              >
                Add to Favorites
              </button>
              <button
                onClick={() => addToLocalStorage("cart", product)}
                className="btn btn-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
