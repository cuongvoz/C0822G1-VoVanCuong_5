import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string;
  constructor() { }

  ngOnInit(): void {
  }
  calculator(element1 , element2 , operator) {

    switch (operator) {
     case '+':
       // tslint:disable-next-line:radix
       this.result = 'Kết quả là ' + (parseInt(element1) +  parseInt(element2));
       break;
      case '-':
        // tslint:disable-next-line:radix
        this.result = 'Kết quả là ' + (parseInt(element1) - parseInt(element2));
        break;
      case 'x':
        // tslint:disable-next-line:radix
        this.result = 'Kết quả là ' + (parseInt(element1) * parseInt(element2));
        break;
      case '/':
        // tslint:disable-next-line:radix
        this.result = 'Kết quả là ' + (parseInt(element1) / parseInt(element2));
        break;
   }
  }
}
