// src/components/FavoritesList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favorites = recipes.filter((r) => favoritesIds.includes(r.id));

  return (
    <section>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorite recipes yet.</p>}

      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #f0b",
            padding: "8px",
            marginBottom: "8px",
          }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from favorites
          </button>
        </div>
      ))}
    </section>
  );
};

export default FavoritesList;
