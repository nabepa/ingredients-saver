import { AxiosInstance } from 'axios';

class Spoonacular {
  public spoonacular: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.spoonacular = httpClient;
  }

  async getRecipesByIngredients(preItems: Ingredients) {
    const response = await this.spoonacular.get('recipes/findByIngredients', {
      params: {
        ingredients: this.makeIngredientsQuery(preItems),
        number: 5,
        limitLicense: true,
        ranking: 1,
        ignorePantry: true,
      },
    });

    return response.data.map((recipe: Recipe) => ({
      ...recipe,
      id: recipe.id,
    }));
  }

  private makeIngredientsQuery(ingredients: Ingredients): string {
    const names: IngredientName[] = Object.keys(ingredients).map(
      (ingredientId) => ingredients[ingredientId].name
    );
    return names.join(',+');
  }
}

export default Spoonacular;
