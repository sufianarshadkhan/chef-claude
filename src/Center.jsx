import React from "react";
import avatar from "/src/assets/my-dp.jpeg";

export default function Center() {
  const [noIngredients, setNoIngredients] = React.useState(["orange", "banana", "apple", "mango"]);
  const ingredientsList = noIngredients.map((item) => <li>{item}</li>);

  let [recipeShown, setRecipeShown] = React.useState(false);

  function handleRecipe() {
    setRecipeShown((prevRecipe) => !prevRecipe);
    
  }
  function handleSubmit(formData) {
    const newItem = formData.get("ingredient");
    setNoIngredients((prevItem) => [...prevItem, newItem]);
  }
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1.5rem",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    section: {
      marginTop: "1.2rem",
    },
  };

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

      {noIngredients.length > 0 && (
        <section className="recipe-section">
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">{ingredientsList}</ul>
          {noIngredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={handleRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}

       {recipeShown && <section>
        <div className="recipe-container" style={styles.container}>
          <h1 style={styles.title}>Get Recipe by Chef Claude</h1>
          <img
            src="https://example.com/chef-claude-dish.jpg"
            alt="Dish by Chef Claude"
            style={styles.image}
          />

          <div className="ingredients" style={styles.section}>
            <h3>Ingredients:</h3>
            <ul>
              <li>2 chicken breasts</li>
              <li>1 tbsp olive oil</li>
              <li>1 tsp garlic powder</li>
              <li>1/2 cup heavy cream</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>

          <div className="instructions" style={styles.section}>
            <h3>Instructions:</h3>
            <ol>
              <li>Heat the olive oil in a skillet over medium heat.</li>
              <li>Season chicken with salt, pepper, and garlic powder.</li>
              <li>
                Cook chicken for 6–7 minutes on each side or until fully cooked.
              </li>
              <li>Reduce heat, add cream, and simmer for 5 minutes.</li>
              <li>Serve hot with your favorite sides.</li>
            </ol>
          </div>
        </div>
      </section>}
    </main>
  );
}
