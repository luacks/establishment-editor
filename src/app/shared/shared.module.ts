import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [EstablishmentCardComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EstablishmentCardComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
