import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./SortDropdown.css";

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const selectOption = (opt) => {
    setSelected(opt);
    setOpen(false);
  };

  return (
    <div className="sort-dropdown">
      <button className="sort-btn" onClick={() => setOpen(!open)}>
        {selected}
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {open && (
        <ul className="sort-menu">
          {options.map((opt, i) => (
            <li
              key={i}
              className={selected === opt ? "active" : ""}
              onClick={() => selectOption(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
