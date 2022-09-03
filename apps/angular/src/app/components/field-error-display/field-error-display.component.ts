import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-field-error-display',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './field-error-display.component.html',
})
export class FieldErrorDisplayComponent {
  color = 'red';
  @Input() errorMsg!: string;
  @Input() displayError!: boolean;
}
