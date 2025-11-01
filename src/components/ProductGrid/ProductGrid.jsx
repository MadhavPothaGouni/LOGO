import { useEffect, useMemo, useState } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "../../services/api";

const PAGE_SIZE = 9;

export default function ProductGrid({ sort = "recommended" }) {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const items = await fetchProducts();
        if (mounted) setAll(items);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  // sort
  const sorted = useMemo(() => {
    const arr = [...all];
    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    else if (sort === "title-asc") arr.sort((a, b) => a.title.localeCompare(b.title));
    return arr;
  }, [all, sort]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(start, start + PAGE_SIZE);

  useEffect(() => { setPage(1); }, [sort]); // reset to first page on sort change

  return (
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {loading
          ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div className="skeleton-card" key={i}>
                <div className="sk-img" />
                <div className="sk-line" />
                <div className="sk-line short" />
              </div>
            ))
          : pageItems.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>

      {!loading && totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
