export interface MealData {
  Id: number;
  Name: string;
  Weight: number;
  Effort: number;
  MealType: number;
  HasRecipe: boolean;
  Recipe: RecipeData;
}

export interface RecipeData {
  Ingredients: string[];
  Steps: string[];
  Notes: string;
}
