// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // All recipes
  recipes: [],

  // Search + filtering state
  searchTerm: '',
  filteredRecipes: [],

  // ---- CRUD ACTIONS ----
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: state.searchTerm
        ? [...state.recipes, newRecipe].filter((recipe) =>
            recipe.title
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase())
          )
        : [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const newRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: newRecipes,
        filteredRecipes: state.searchTerm
          ? newRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : newRecipes,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const update = (recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe;

      const newRecipes = state.recipes.map(update);

      return {
        recipes: newRecipes,
        filteredRecipes: state.searchTerm
          ? newRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : newRecipes,
      };
    }),

  // ---- SEARCH + FILTER ACTIONS ----
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => {
      const term = state.searchTerm.trim().toLowerCase();

      // If search is empty, show all recipes
      if (!term) {
        return { filteredRecipes: state.recipes };
      }

      return {
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term)
        ),
      };
    }),
}));
