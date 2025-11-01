import "./SortBar.css";
import SortDropdown from "../SortDropdown/SortDropdown";

export default function SortBar() {
  // Trigger global event to open mobile filters
  const openMobileFilters = () => {
    window.dispatchEvent(new Event("openFilters"));
  };

  return (
    <div className="sort-bar container">
      
      {/* Left Side */}
      <div className="left">
        
        {/* Mobile Filter Button */}
        <button className="filter-mobile-btn" onClick={openMobileFilters}>
          FILTER
        </button>

        {/* Item count */}
        <span className="items">3425 ITEMS</span>

        {/* Desktop only - hide filters */}
        <button className="hide-filter">
          <span>{"<"}</span> HIDE FILTER
        </button>
      </div>

      {/* Right Side */}
      <div className="right">
        <SortDropdown />
      </div>
    </div>
  );
}
