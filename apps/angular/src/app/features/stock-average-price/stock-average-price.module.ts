import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StockAveragePriceRoutingModule} from './stock-average-price-routing.module';
import {StockAveragePriceComponent} from './stock-average-price.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StockAveragePriceComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    InputNumberModule,
    StockAveragePriceRoutingModule,
    FormsModule,
  ]
})
export class StockAveragePriceModule {
}
