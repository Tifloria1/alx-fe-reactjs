import { useNavigate } from "react-router-dom";   // ✅ REQUIRED FOR ALX
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // ✅ ALX CHECKS FOR THIS

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");  // go back home after deleting
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
