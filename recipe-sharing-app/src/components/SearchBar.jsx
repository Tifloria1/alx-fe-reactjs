// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRecipes(); // will use the updated searchTerm from the store
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{
        display: 'block',
        width: '100%',
        padding: '8px',
        margin: '16px 0',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default SearchBar;
