const IngredientList = ({ingredients, addedIngredient}) => {
  return (
  <ul>
    {ingredients.map((ingredient, index) => {
        <li key={index}>
            {ingredient.name}
            <button onClick={() => addedIngredient(ingredient)}>Add Ingredient</button>
        </li>
    })}
  </ul>
  );
};

export default IngredientList;
