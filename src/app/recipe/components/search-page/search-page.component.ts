import { Component, OnInit } from '@angular/core';
import { MealData } from 'src/app/Models/mealData';
const data = require('../../../data.json');

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  mealList: MealData[] = [];
  mealData: MealData[] = data;

  constructor() {}

  ngOnInit(): void {
    this.getMealsWithRecipes();
  }

  getMealsWithRecipes() {
    this.mealList = this.mealData.filter((meal) => meal.HasRecipe === true);
    console.log('see what we got ', this.mealList);
  }
}
