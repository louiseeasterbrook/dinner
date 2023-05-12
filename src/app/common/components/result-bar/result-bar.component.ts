import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'result-bar',
  templateUrl: './result-bar.component.html',
  styleUrls: ['./result-bar.component.scss'],
})
export class ResultBarComponent implements OnInit {
  @Input() text: string = '';
  @Input() hasRecipe: boolean = false;
  @Input() id: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clicked() {
    if(!this.id){
      return
    }
    this.router.navigateByUrl(`recipe/${this.id}`);
  }
}
