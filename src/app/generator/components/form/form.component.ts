import { Component, OnInit } from '@angular/core';
import { DinnerData } from 'src/app/Models/mealData';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  amount: number = 1;
  dinnerData: DinnerData[];
  masterData: string[] = [];
  total: number = 0;
  result: string[] = [];
  load: boolean = false;

  constructor(private dataService: DataService) {
    this.dinnerData = this.dataService.getAllDinnerData();
  }

  ngOnInit(): void {
    this.createArray();
  }

  createArray() {
    this.dinnerData.forEach((x) => {
      if (x.MealType === 1) {
        this.total += x.Weight;
        this.addOption(x.Name, x.Weight);
      }
    });
  }

  addOption(name: string, loop: number) {
    for (let i = 0; i < loop; i++) {
      this.masterData.push(name);
    }
  }

  submit() {
    this.result = [];
    this.load = true;
    setTimeout(() => this.getResult(this.amount), 500);
  }

  getResult(loopAmount: number) {
    this.result = [];
    while (this.result.length < loopAmount) {
      let index = Math.floor(Math.random() * this.total);
      //find duplicates
      if (this.result.findIndex((x) => x === this.masterData[index]) < 0) {
        this.result.push(this.masterData[index]);
      }
    }
    this.load = false;
  }
}
