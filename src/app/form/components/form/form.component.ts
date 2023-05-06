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
      this.addOption(x.Name, x.Weight);
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
    setTimeout(() => this.getResult(this.amount), 1000);
  }

  getResult(loopAmount: number) {
    this.result = [];
    for (let i = 0; i < loopAmount; i++) {
      let index = Math.floor(Math.random() * this.total);
      //find duplicates
      if (this.result.findIndex((x) => x === this.masterData[index]) >= 0) {
        index = Math.floor(Math.random() * this.total);
      }
      this.result.push(this.masterData[index]);
    }
    this.load = false;
  }
}
