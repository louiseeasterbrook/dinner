import { Component, OnInit } from '@angular/core';
import { MealData } from 'src/app/Models/mealData';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  mealList: MealData[] = [];
  displayList: MealData[] = [];
  searchInput: string = '';

  constructor(private dataService: DataService) {
    this.mealList = this.dataService.getAllRecipeData();
  }

  ngOnInit(): void {
    this.displayList = this.mealList;
  }

  searchChange(input: string) {
    let lowerCaseInput = input.toLowerCase();
    this.displayList = this.mealList.filter((x) =>
      x.Name.toLowerCase().includes(lowerCaseInput)
    );
  }
}
