import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHeaderComponent } from './components/edit-header/edit-header.component';
import { EstablishmentEditComponent } from './establishment-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditHeaderComponent, EstablishmentEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EstablishmentEditModule { }
