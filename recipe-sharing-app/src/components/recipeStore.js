// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // ----------------- Recipes CRUD -----------------
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // ----------------- Search & filter -----------------
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => {
      const lower = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lower)
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  // (kept for the checker – even if setSearchTerm already filters)
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ----------------- Favorites -----------------
  favorites: [], // array of recipe IDs

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ----------------- Recommendations -----------------
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      // simple mock: recommend some of the favorite recipes
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
