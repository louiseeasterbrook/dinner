import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'result-bar',
  templateUrl: './result-bar.component.html',
  styleUrls: ['./result-bar.component.scss'],
})
export class ResultBarComponent implements OnInit {
  @Input() text: string = '';
  @Input() hasRecipe: boolean = false;
  @Input() id: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
