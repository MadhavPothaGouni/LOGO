import { useState, useEffect } from "react";
import Filters from "../Filters/Filters";
import "./MobileFilters.css";

export default function MobileFilters() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("openFilters", openHandler);
    return () => window.removeEventListener("openFilters", openHandler);
  }, []);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="overlay" onClick={() => setOpen(false)} />

      {/* Drawer */}
      <div className="mobile-filter-drawer">
        <div className="drawer-header">
          <h4>FILTERS</h4>
          <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="drawer-content">
          <Filters />
        </div>
      </div>
    </>
  );
}
