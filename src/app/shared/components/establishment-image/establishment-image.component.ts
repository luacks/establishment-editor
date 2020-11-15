import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-image',
  templateUrl: './establishment-image.component.html',
  styleUrls: ['./establishment-image.component.scss']
})
export class EstablishmentImageComponent implements OnInit {

  @Input()
  src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
