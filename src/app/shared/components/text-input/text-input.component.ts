import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  hiddenLabel: boolean;

  @Input()
  id: string;

  @Input()
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
