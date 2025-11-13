import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div>
            <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <SearchBar /> {/* <- new component */}
            <RecipeList />
          </div>
        }
      />

      {/* DETAILS PAGE */}
      <Route path="/recipe/:id" element={<RecipeDetails />} />

      {/* EDIT PAGE */}
      <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
    </Routes>
  );
}

export default App;
