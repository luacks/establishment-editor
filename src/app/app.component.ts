import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'teste-establishment';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // go to establishemtns route because home doesnt exist
    // this.router.navigate(['establishments']);
  }
}
