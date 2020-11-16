import { Component, forwardRef, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from './SelectOption';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent implements ControlValueAccessor {

  @Input()
  items: SelectOption[];

  @Input()
  hiddenLabel: boolean;

  public active = false;

  public value: any;

  public isDisabled: boolean;

  private onChange;

  public hoveredOption: number;

  constructor(@Self() public ngControl: NgControl){
    this.ngControl.valueAccessor = this;
  }

  getSelectedText(): string {
    if ( Array.isArray(this.items) ) {
      const option = this.items.filter( item => item.value === this.value )[0];
      return option ? option.text : 'Selecione';
    }
  }

  registerOnChange(fn: any): void {
    this.items.map( (item, index) => {
      if ( item.selected ) {
        this.writeValue(item.value);
        this.hoveredOption = index;
      }
    });

    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  toggleList(enable: boolean): void {
    if ( enable ) {
      this.active = true;
    } else {
      setTimeout(() => this.active = false, 100);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  selectItem(item: SelectOption): void {
    console.log(item);
    this.onChange(item.value);
    this.value = item.value;
    this.active = false;
  }
}
