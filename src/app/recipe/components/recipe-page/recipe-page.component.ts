import { Component, OnInit } from '@angular/core';
import { MealData } from 'src/app/Models/mealData';
import { Location } from '@angular/common';
const data = require('../../../data.json');

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  mealData: MealData | null = null;
  dataList: MealData[] = data;

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMealData(+id);
    }
  }

  getMealData(id: number) {
    this.mealData = this.dataList.filter((meal) => meal.Id === id)[0] || null;
  }

  goBack() {
    this._location.back();
  }
}
