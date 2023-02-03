import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  newColor:string = "#c01b1b"

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(target: any) {
    this.newColor = target.value;
  }
}
