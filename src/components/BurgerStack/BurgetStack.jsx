const BurgerStack = (stack) => {
  return (
  <ul>
    {stack.map((ingredient, index) => {
        <li key={index}>
            {ingredient.name}
        </li>
    })}
  </ul>
  );
};

export default BurgerStack;
