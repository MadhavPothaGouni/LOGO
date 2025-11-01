import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);

export function FilterProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  return (
    <FilterContext.Provider value={{ selectedFilters, addFilter, removeFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
