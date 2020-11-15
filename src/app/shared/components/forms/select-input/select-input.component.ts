import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from './SelectOption';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
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

  getSelectedText(): string {
    if ( Array.isArray(this.items) ) {
      const option = this.items.filter( item => item.value === this.value )[0];
      return option.text;
    }
  }

  registerOnChange(fn: any): void {
    this.items.map( item => {
      if ( item.selected ) {
        this.writeValue(item.value);
      }
    })

    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  toggleList(): void {
    this.active = !this.active;
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
      this.value = value;
  }

  selectItem(item: SelectOption): void {
      this.onChange(item);
      this.value = item.value;
      this.active = false;
  }
}
