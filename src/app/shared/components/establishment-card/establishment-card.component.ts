import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { IEstablishment, getEstablishmentAddress } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

  @Input()
  establishment: IEstablishment;

  address: IAddress;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateEdit(): void {
    this.router.navigate(['establishments', this.establishment.index, 'edit'], {
      state: this.establishment
    });
  }
}
