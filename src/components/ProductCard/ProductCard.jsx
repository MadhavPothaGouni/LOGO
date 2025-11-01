import { FiHeart } from "react-icons/fi";
import "./ProductCard.css";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="product-card">
      
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />

        {/* Heart icon */}
        <button 
          className={`wishlist-btn ${fav ? "active" : ""}`}
          onClick={() => setFav(!fav)}
        >
          <FiHeart />
        </button>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* CTA Button */}
        <button className="view-btn">View Product</button>
      </div>

      <h3 className="card-title">{product.title}</h3>
      <p className="card-sub">Sign in or Create account to see pricing</p>
    </div>
  );
}
