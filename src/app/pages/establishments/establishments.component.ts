import { Component, OnInit } from '@angular/core';
import { IEstablishment } from 'src/app/models/establishment.model';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';

@Component({
  selector: 'app-establishments',
  template: `
    <div class="container" *ngIf="establishments">
      <app-establishment-card *ngFor="let establishment of establishments" [establishment]="establishment"></app-establishment-card>
    </div>
    <div class="container establishment-list" *ngIf="error">
      <app-alert-message message="Não foi possível carregar a lista de estabelecimentos :("></app-alert-message>
    </div>
  `,
  styleUrls: ['./establishments.scss']
})
export class EstablishmentsComponent implements OnInit {

  establishments: IEstablishment[];

  error = false;

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.establishmentService.fetch()
      .subscribe((establishments: IEstablishment[]) => {
        this.establishments = establishments;
      }, (error) => {
        this.error = true;
      });
  }

}
