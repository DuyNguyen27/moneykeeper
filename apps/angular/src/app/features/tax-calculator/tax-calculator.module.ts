import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxCalculatorRoutingModule } from './tax-calculator-routing.module';
import { TaxCalculatorComponent } from './tax-calculator.component';


@NgModule({
  declarations: [
    TaxCalculatorComponent
  ],
  imports: [
    CommonModule,
    TaxCalculatorRoutingModule
  ]
})
export class TaxCalculatorModule { }
