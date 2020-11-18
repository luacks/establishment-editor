import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h3>Go to /establishments</h3>
      <app-button [routerLink]="['establishments']" title="Go"></app-button>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
