import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter 2: {{counter}}</h3>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  constructor() {

  }
  public counter:number =0;
  increaseBy(value:number):void{
    this.counter = this.counter+=value;
  }
  resetCounter():void{
    this.counter=0;
  }
}
