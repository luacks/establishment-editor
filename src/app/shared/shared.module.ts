import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { EstablishmentImageComponent } from './components/establishment-image/establishment-image.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [EstablishmentCardComponent, NavbarComponent, EstablishmentImageComponent, TextInputComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EstablishmentCardComponent,
    EstablishmentImageComponent,
    NavbarComponent,
    TextInputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
