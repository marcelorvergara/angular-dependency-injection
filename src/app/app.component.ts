import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  totActions: number = 0

  constructor(private counterService: CounterService){
    this.counterService.counterUpdated.subscribe(
      () => this.totActions = this.counterService.getCounterValue()
    )
  }

  ngOnInit(): void {
    this.totActions = this.counterService.getCounterValue()
  }
}
