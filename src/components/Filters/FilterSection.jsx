import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useFilters } from "../../context/FilterContext";
import "./FilterSection.css";

export default function FilterSection({ title, options, showCheckbox }) {
  const [open, setOpen] = useState(true);
  const { selectedFilters, addFilter, removeFilter } = useFilters();

  const handleSelect = (opt) => {
    if (selectedFilters.includes(opt)) {
      removeFilter(opt);
    } else {
      addFilter(opt);
    }
  };

  return (
    <div className="filter-section">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        {showCheckbox && <input type="checkbox" />}
        <span className="filter-title">{title}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {open && (
        <ul className="filter-list">
          {options.map((opt, i) => (
            <li
              key={i}
              className={`filter-item ${selectedFilters.includes(opt) ? "selected" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      <div className="filter-divider"></div>
    </div>
  );
}
