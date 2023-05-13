export interface DinnerData {
  Id: number;
  Name: string;
  Weight: number;
  Effort: number;
  MealType: number;
}

export interface MealData {
  Id: number;
  Name: string;
  Weight: number;
  Effort: number;
  MealType: number;
  HasRecipe: boolean;
  Recipe: RecipeList[];
}

export interface RecipeList {
  RecipeName: string | null;
  Ingredients: RecipeSection[];
  Method: RecipeSection[];
}

export interface RecipeSection {
  Title: string | null;
  List: string[];
}
