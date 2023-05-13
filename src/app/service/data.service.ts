import { Injectable } from '@angular/core';
import { DinnerData, MealData } from '../Models/mealData';
const dinData = require('../data.json');
const recData = require('../RecipeData.json');

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dinnerData: DinnerData[] = dinData;
  recipeData: MealData[] = recData;

  constructor() {}

  getAllDinnerData(): DinnerData[] {
    return this.dinnerData;
  }

  getAllRecipeData(): MealData[] {
    return this.recipeData;
  }

  getRecipeDataById(id: number) {
    return this.recipeData.filter((x) => x.Id === id)[0] || null;
  }
}
