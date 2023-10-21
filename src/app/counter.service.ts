import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  totActions : number = 0
  counterUpdated = new EventEmitter<number>();

  constructor() { }

  onActivate() {
    this.totActions++
  }

  onInactvate() {
    this.totActions++
  }

  getCounterValue() {
    return this.totActions
  }
}
