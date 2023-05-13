import { Component, OnInit } from '@angular/core';
import { MealData } from 'src/app/Models/mealData';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  mealData: MealData | null = null;

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.mealData = this.dataService.getRecipeDataById(+id);
  }

  goBack() {
    this._location.back();
  }
}
