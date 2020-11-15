import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IEstablishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {

  @Input()
  establishment: IEstablishment;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
