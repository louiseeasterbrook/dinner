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
  searchInput: string = '';
  displayList: MealData[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getMealsWithRecipes();
    this.displayList = this.mealList;
  }

  getMealsWithRecipes() {
    this.mealList = this.mealData.filter((meal) => meal.HasRecipe === true);
  }
  searchChange(input: string) {
    let lowerCaseInput = input.toLowerCase();
    this.displayList = this.mealList.filter((x) =>
      x.Name.toLowerCase().includes(lowerCaseInput)
    );
  }
}
