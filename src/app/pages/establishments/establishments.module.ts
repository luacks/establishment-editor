import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments.component';
import { SharedModule } from '../../shared/shared.module';
import { EstablishmentFormComponent } from './establishment-form.component';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentHeaderComponent } from './components/establishment-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentsComponent
  },
  {
    path: ':id/edit',
    component: EstablishmentFormComponent
  }
];

@NgModule({
  declarations: [EstablishmentsComponent, EstablishmentFormComponent, EstablishmentHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EstablishmentsModule { }
