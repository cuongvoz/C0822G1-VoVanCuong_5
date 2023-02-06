import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
   backgroundColor = 'gray';
   newBackgroundColor = 'pink';
   valuez = 0;
  rating: any[] = [
    {
     value: 1,
      background: this.backgroundColor
    },
    {
      value: 2,
      background: this.backgroundColor
    },
    {
      value: 3,
      background: this.backgroundColor
    },
    {
      value: 4,
      background: this.backgroundColor
    }
    ,
    {
      value: 5,
      background: this.backgroundColor
    },
    {
      value: 6,
      background: this.backgroundColor
    },
    {
      value: 7,
      background: this.backgroundColor
    },
    {
      value: 8,
      background: this.backgroundColor
    },
    {
      value: 9,
      background: this.backgroundColor
    },
    {
      value: 10,
      background: this.backgroundColor
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  rate(target: any) {
   this.valuez = target;
    // tslint:disable-next-line:prefer-for-of
   for (let i = 0; i < this.rating.length; i++) {
      if (this.rating[i].value <= target) {
        // tslint:disable-next-line:no-unused-expression
        this.rating[i].background = 'pink';
      } else {
        this.rating[i].background = 'gray';
      }
    }
  }
}
