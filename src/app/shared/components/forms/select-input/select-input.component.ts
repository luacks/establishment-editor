import { Component, ElementRef, Input, Self, ViewChild } from '@angular/core';
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

  @ViewChild('fakeSelect')
  public inputRef: ElementRef;

  public active = false;

  public value: any;

  public selectedText = '';

  public isDisabled: boolean;

  public hoveredOption = 0;

  private onChange;

  constructor(@Self() public ngControl: NgControl){
    this.ngControl.valueAccessor = this;
  }

  registerOnTouched(fn: any): void { }

  registerOnChange(fn: any): void {
    this.items.map( (item, index) => {
      if ( item.selected ) {
        this.writeValue(item.value);
        this.hoveredOption = index;
      }
    });

    this.onChange = fn;
  }

  toggleList(enable: boolean): void {
    if ( enable && !this.isDisabled ) {
      this.hoveredOption = 0;
      this.setActive(true);
    } else {
      // TODO deve existir algo melhor pra isso
      setTimeout(() => this.setActive(false), 200);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
    this.selectedText = this.getSelectedText(value);
    this.value = value;
  }

  selectItem(item: SelectOption): void {
    this.onChange(item.value);
    this.value = item.value;
    this.selectedText = item.text;
    this.setActive(false);
  }

  private setActive(value: boolean): void {

    const keydownHandler = ({ keyCode }) => {
      if ( keyCode === 40 && this.hoveredOption < this.items.length - 1) {
        this.hoveredOption++;
      }

      if ( keyCode === 38 && this.hoveredOption > 0 ) {
        this.hoveredOption--;
      }

      if ( keyCode === 13 ) {
        this.writeValue(this.items[this.hoveredOption].value);
        this.toggleList(false);
      }
    };

    if ( !value ) {
      this.inputRef.nativeElement.removeEventListener('keydown', keydownHandler);
    } else {
      this.inputRef.nativeElement.addEventListener('keydown', keydownHandler);
    }

    this.active = value;
  }

  private getSelectedText(value: any): string {
    const itemSelected = this.items.filter( item => item.value === value )[0];
    return itemSelected ? itemSelected.text : 'Selecione';
  }

}
