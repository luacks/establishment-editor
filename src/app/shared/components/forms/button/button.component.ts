import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  isDisabled = false;

  @Output()
  btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event): void {
    if ( !this.isDisabled ) {
      this.btnClick.emit(event);
    }
  }

}
