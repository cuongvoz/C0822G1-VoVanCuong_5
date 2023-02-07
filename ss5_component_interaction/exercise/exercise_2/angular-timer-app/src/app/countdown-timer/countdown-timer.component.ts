import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() value: number;
  status: string;
  second: number = 10;
  remainingTime: number;
  private interval:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  run() {

       this.interval = window.setInterval( () => {
       this.value -= 1;
       if (this.value === 0) {
         this.clearTime();
       }
      },1000)


    }

    start() {
      this.run();
     if (this.value === 0) {
       this.clearTime();
       this.value = this.second;
     }
    }

    reset() {
     this.clearTime();
     this.value = this.second;
    }

    stop() {
    this.clearTime();
    }

  clearTime() {
    clearInterval(this.interval);
  }
}
