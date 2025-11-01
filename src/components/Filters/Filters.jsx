import FilterSection from "./FilterSection";
import "./Filters.css";
export default function Filters() {
  return (
    <div className="filters-container">
      <h4 className="filters-title">FILTERS</h4>

      {/* Customizable (with checkbox) */}
      <FilterSection
        title="CUSTOMIZABLE"
        options={["All"]}
        showCheckbox={true}
      />

      <FilterSection
        title="IDEAL FOR"
        options={["All", "Women", "Men", "Kids"]}
      />

      <FilterSection
        title="OCCASION"
        options={["All", "Casual", "Work", "Travel"]}
      />

      <FilterSection
        title="WORK"
        options={["All", "Office", "Outdoor"]}
      />

      <FilterSection
        title="FABRIC"
        options={["All", "Cotton", "Leather", "Wool"]}
      />

      <FilterSection
        title="SEGMENT"
        options={["All", "Premium", "Luxury"]}
      />

      <FilterSection
        title="SUITABLE FOR"
        options={["All", "Adults", "Kids"]}
      />

      <FilterSection
        title="RAW MATERIALS"
        options={["All", "Organic", "Recycled"]}
      />

      <FilterSection
        title="PATTERN"
        options={["All", "Solid", "Printed"]}
      />
    </div>
  );
}
