import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [EstablishmentsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EstablishmentsModule { }
