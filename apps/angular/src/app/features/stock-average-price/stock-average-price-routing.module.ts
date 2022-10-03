import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockAveragePriceComponent } from './stock-average-price.component';

const routes: Routes = [{ path: '', component: StockAveragePriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockAveragePriceRoutingModule { }
