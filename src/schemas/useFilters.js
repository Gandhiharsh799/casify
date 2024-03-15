import { useState } from "react";

const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState);

  const updateFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  return [filters, updateFilter];
};

export default useFilters;
