import React from "react";
import avatar from "/src/assets/my-dp.jpeg";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList"
import {getRecipeFromMistral} from "./ai"


export default function Center() {

  const [noIngredients, setNoIngredients] = React.useState([]);
  

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
   const recipeMarkdown = await getRecipeFromMistral(noIngredients);
   setRecipe(recipeMarkdown)
  }

  function handleSubmit(formData) {
    const newItem = formData.get("ingredient");
    setNoIngredients(prevItem => [...prevItem, newItem]);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredients</button>
      </form>

      {noIngredients.length > 0 && 
      <IngredientsList noIngredients={noIngredients} getRecipe={getRecipe}/>}

      {recipe && <ClaudeRecipe recipe={recipe}  />}

    
    </main>
  );
}
