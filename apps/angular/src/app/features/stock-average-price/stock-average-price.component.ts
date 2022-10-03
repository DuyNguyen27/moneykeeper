import { Component } from '@angular/core';
import { triggerExpandHeightAnimation } from '@core/animations';

@Component({
  selector: 'angular-stock-average-price',
  templateUrl: './stock-average-price.component.html',
  styleUrls: ['./stock-average-price.component.scss'],
  animations: [...triggerExpandHeightAnimation],
})
export class StockAveragePriceComponent {
  stockQuantityInit?: number;
  stockPriceInit?: number;
  stockQuantityNew?: number;
  stockPriceNew?: number;

  get getTotalPriceInit() {
    if (!this.stockQuantityInit || !this.stockPriceInit) return;
    return this.stockQuantityInit * this.stockPriceInit;
  }

  get getTotalPriceNew() {
    if (!this.stockQuantityNew || !this.stockPriceNew) return;
    return (
      this.stockQuantityNew * this.stockPriceNew +
      this.stockQuantityNew * this.stockPriceNew * 0.001
    );
  }

  get getTotalPriceStock() {
    if (!this.getTotalPriceInit || !this.getTotalPriceNew) return;
    return this.getTotalPriceInit + this.getTotalPriceNew;
  }

  get getTotalQuantityStock() {
    if (!this.stockQuantityInit || !this.stockQuantityNew) return;
    return this.stockQuantityInit + this.stockQuantityNew;
  }

  get getNewAveragePrice() {
    if (!this.getTotalPriceStock || !this.getTotalQuantityStock) return;
    return Math.round(this.getTotalPriceStock / this.getTotalQuantityStock);
  }

  resetForm() {
    this.stockQuantityInit = undefined;
    this.stockPriceInit = undefined;
    this.stockQuantityNew = undefined;
    this.stockPriceNew = undefined;
  }
}
