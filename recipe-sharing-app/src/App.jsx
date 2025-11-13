import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui', margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
