import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './components/forms/text-input/text-input.component';
import { ButtonComponent } from './components/forms/button/button.component';
import { SelectInputComponent } from './components/forms/select-input/select-input.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    EstablishmentCardComponent,
    NavbarComponent,
    TextInputComponent,
    ButtonComponent,
    SelectInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    EstablishmentCardComponent,
    NavbarComponent,
    TextInputComponent,
    ButtonComponent,
    SelectInputComponent
  ]
})
export class SharedModule { }
