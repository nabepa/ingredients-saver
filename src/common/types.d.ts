type IngredientName = string;
type IngredientId = number | string;
type Ingredient = { id: IngredientId; name: IngredientName; image?: string };
type Ingredients = Record<IngredientId, Ingredient>;

type RecipeId = number | string;
type ImageType = 'png' | 'jpg';
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

type ItemState =
  | 'Filtered'
  | 'Added'
  | 'Selected'
  | 'Used'
  | 'Unused'
  | 'Missed';

type AddItem = (item: Ingredient) => void;
type SelectItem = (item: Ingredient) => void;
type HanddleClickItem = (item: Ingredient) => void;
