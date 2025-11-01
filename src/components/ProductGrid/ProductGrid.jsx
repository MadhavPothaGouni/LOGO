import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const mockProducts = [
  { id: 1, image: "/assets/p1.png", title: "PRODUCT NAME", badge: "NEW PRODUCT" },
  { id: 2, image: "/assets/p2.png", title: "PRODUCT NAME", badge: "OUT OF STOCK" },
  { id: 3, image: "/assets/p3.png", title: "PRODUCT NAME" },
  { id: 4, image: "/assets/p4.png", title: "PRODUCT NAME" },
  { id: 5, image: "/assets/p5.png", title: "PRODUCT NAME" },
  { id: 6, image: "/assets/p6.png", title: "PRODUCT NAME" },
];

export default function ProductGrid() {
  return (
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {mockProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
