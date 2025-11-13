// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to list
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      style={{ backgroundColor: 'crimson', color: 'white', padding: '0.5rem' }}
    >
      Delete recipe
    </button>
  );
};

export default DeleteRecipeButton;
