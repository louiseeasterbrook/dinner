import { Component, OnInit } from '@angular/core';
const data = require('../data.json');

interface DinnerData {
  Name: string;
  Weight: number;
}

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
  constructor() {
    this.dinnerData = data;
  }

  ngOnInit(): void {
    this.createArray();
  }

  createArray() {
    this.dinnerData.forEach((x) => {
      this.total += x.Weight;
      if (x.Weight == 1) {
        this.masterData.push(x.Name);
        return;
      }
      if (x.Weight == 2) {
        this.masterData.push(x.Name);
        this.masterData.push(x.Name);
        return;
      }
      if (x.Weight == 4) {
        this.masterData.push(x.Name);
        this.masterData.push(x.Name);
        this.masterData.push(x.Name);
        this.masterData.push(x.Name);
        return;
      }
    });
  }

  submit() {
    this.result = [];
    this.load = true;
    setTimeout(() => this.getResult(this.amount), 1000);
  }

  getResult(loopAmount: number) {
    this.result = [];
    for (let i = 0; i < loopAmount; i++) {
      let index = Math.floor(Math.random() * this.total);
      this.result.push(this.masterData[index]);
    }
    this.load = false;
  }
}
