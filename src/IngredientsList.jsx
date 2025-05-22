
export default function IngredientsList(props){

    const ingredientsList = props.noIngredients.map((item, index) => 
    <li key={index}>{item}</li>
);
    
    return (
        <section className="recipe-section">
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">{ingredientsList}</ul>
          {props.noIngredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={props.getRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
    )
  }