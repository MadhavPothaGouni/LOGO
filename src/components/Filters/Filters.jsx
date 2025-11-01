import { useState } from "react";
import "./Filters.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const filterSections = [
  "CUSTOMIZABLE",
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function Filters() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filters">
      <div className="filters-title">FILTERS</div>

      {filterSections.map((sec) => (
        <div key={sec} className="filter-section">
          <div className="filter-header" onClick={() => toggleSection(sec)}>
            <span>{sec}</span>
            {openSections[sec] ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {openSections[sec] && (
            <div className="filter-content">
              <label>
                <input type="checkbox" /> All
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
