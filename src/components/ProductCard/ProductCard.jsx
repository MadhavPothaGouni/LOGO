import "./ProductCard.css";
import { FiHeart } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="img-box">
        {product.badge === "NEW PRODUCT" && (
          <span className="badge new">NEW PRODUCT</span>
        )}
        {product.badge === "OUT OF STOCK" && (
          <span className="badge out">OUT OF STOCK</span>
        )}

        <img src={product.image} alt={product.title} />
        <button className="wishlist">
          <FiHeart />
        </button>
      </div>

      <h4 className="title">{product.title}</h4>
      <p className="subtext">Sign in or Create an account to see pricing</p>
    </div>
  );
}
