import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldErrorDisplayComponent } from '@core/components/field-error-display/field-error-display.component';
import { TranslocoRootModule } from '@core/transloco-root.module';
@NgModule({
  declarations: [FieldErrorDisplayComponent],
  imports: [CommonModule, TranslocoRootModule],
  exports: [FieldErrorDisplayComponent],
})
export class FieldErrorDisplayModule {}
