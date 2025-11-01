import "./SortBar.css";
import { FiChevronDown } from "react-icons/fi";

export default function SortBar() {
  return (
    <div className="sortbar container">
      <div className="left">
        <span>3425 ITEMS</span>
        <button className="hide-filter">HIDE FILTER</button>
      </div>

      <div className="right">
        <span>RECOMMENDED</span>
        <FiChevronDown />
      </div>
    </div>
  );
}
