type IngredientName = string;
type IngredientId = number | string;
type Ingredient = { id: IngredientId; name: IngredientName; image?: string };
type Ingredients = Record<IngredientId, Ingredient>;

type ImageType = 'png' | 'jpg';
type ItemState =
  | 'Filtered' // filtered item in search bar
  | 'Used' // item user select to use
  | 'Unused' // item user doesn't select to use
  | 'Added' // needed item user has but doesn't select to use
  | 'Selected' // needed item user has and select to use
  | 'Missed'; // needed item user doesn't have but

type RecipeId = number | string;
type Recipe = {
  id: RecipeId;
  title: string;
  image: string;
  imageType: ImageType;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
};

type RecipeInfo = {
  id: RecipeId;
  sourceUrl: string;
};
type RecipesInfo = Record<RecipeId, RecipeInfo>;

type AddItem = (item: Ingredient) => void;
type RemoveItem = (item: Ingredient) => void;
type SelectItem = (item: Ingredient) => void;
type HanddleClickItem = (item: Ingredient) => void;
