type IngredientQuery = string;
type IngredientId = string;
type Ingredient = { id: IngredientId; query: IngredientQuery };
type Ingredients = Record<IngredientId, Ingredient>;

type addItem = (ingredient: Ingredient) => void;
