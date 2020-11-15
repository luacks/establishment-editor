import { Component, Input, OnInit } from '@angular/core';
import { SelectOption } from './SelectOption';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  hiddenLabel: boolean;

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  options: SelectOption[];

  active: boolean;

  selectedOption: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.options.filter( option => option.selected === true )[0];
  }

  selectOption(option): void {
    this.selectedOption = option;
    this.active = false;
  }

  show(): void {
    this.active = !this.active;
  }
}
