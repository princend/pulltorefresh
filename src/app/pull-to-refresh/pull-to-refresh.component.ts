import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, map, takeWhile, repeat, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pull-to-refresh',
  template: `
  <div style="position: absolute; top: 0; left: 50%">
    <div style="margin-left: -35px">
      <svg width="70px" height="70">
        <circle cy="35" cx="35" r="35" fill="lightgrey"></circle>
        <circle cy="15" cx="35" r="10" fill="black"></circle>
      </svg>
    </div>
  </div>
  `,
  styles: []
})
export class PullToRefreshComponent implements OnInit {
  touchstart$ = fromEvent<TouchEvent>(document, 'touchstart');
  touchend$ = fromEvent<TouchEvent>(document, 'touchend');
  touchmove$ = fromEvent<TouchEvent>(document, 'touchmove');



  constructor() { }
  ngOnInit() {

  }
}
