import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxCalculatorRoutingModule } from './tax-calculator-routing.module';
import { TaxCalculatorComponent } from './tax-calculator.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PersonalIncomeTaxComponent } from './personal-income-tax/personal-income-tax.component';
import { PersonalIncomeTaxFinalizationComponent } from './personal-income-tax-finalization/personal-income-tax-finalization.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { FieldErrorDisplayModule } from '@core/shared/shared.module';
import { TranslocoRootModule } from '@core/transloco-root.module';

@NgModule({
  declarations: [
    TaxCalculatorComponent,
    PersonalIncomeTaxComponent,
    PersonalIncomeTaxFinalizationComponent,
  ],
  imports: [
    CommonModule,
    TaxCalculatorRoutingModule,
    NzTabsModule,
    NzGridModule,
    InputNumberModule,
    DropdownModule,
    PanelModule,
    ReactiveFormsModule,
    FieldErrorDisplayModule,
    TranslocoRootModule,
  ],
})
export class TaxCalculatorModule {}
