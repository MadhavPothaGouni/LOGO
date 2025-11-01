import "./FilterChips.css";
import { useFilters } from "../../context/FilterContext";
import { FiX } from "react-icons/fi";

export default function FilterChips() {
  const { selectedFilters, removeFilter } = useFilters();

  if (selectedFilters.length === 0) return null;

  return (
    <div className="chips-container container">
      {selectedFilters.map((filter, i) => (
        <div className="chip" key={i}>
          {filter}
          <FiX onClick={() => removeFilter(filter)} />
        </div>
      ))}
    </div>
  );
}
