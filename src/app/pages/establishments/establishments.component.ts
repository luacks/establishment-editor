import { Component, OnInit } from '@angular/core';
import { IEstablishment } from 'src/app/models/establishment.model';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';

@Component({
  selector: 'app-establishments',
  template: `
    <div class="container">
      <app-establishment-card *ngFor="let establishment of establishments" [establishment]="establishment"></app-establishment-card>
    </div>
  `
})
export class EstablishmentsComponent implements OnInit {

  establishments: IEstablishment[];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.establishmentService.fetch()
      .subscribe((establishments: IEstablishment[]) => {
        this.establishments = establishments;
      });
  }

}
