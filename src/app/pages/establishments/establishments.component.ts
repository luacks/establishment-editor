import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IEstablishment } from 'src/app/models/establishment.model';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {

  establishments: IEstablishment[];

  editForm;

  constructor(
    private establishmentService: EstablishmentService,
    private formBuilder: FormBuilder) {
      this.editForm = this.formBuilder.group({
        name: ''
      });
  }

  ngOnInit(): void {
    this.establishmentService.fetch()
      .subscribe((establishments: IEstablishment[]) => {
        this.establishments = establishments;
      });
  }

}
