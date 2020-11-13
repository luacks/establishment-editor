import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentEditComponent } from './pages/establishment-edit/establishment-edit.component';
import { EstablishmentsComponent } from './pages/establishments/establishments.component';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentsComponent
  },
  {
    path: 'establishment/:id/edit',
    component: EstablishmentEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
