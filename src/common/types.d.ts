type IngredientQuery = string;
type IngredientId = number;
type Ingredient = { query: IngredientQuery; id: IngredientId };
type Ingredients = Record<IngredientsId, Ingredient>;
