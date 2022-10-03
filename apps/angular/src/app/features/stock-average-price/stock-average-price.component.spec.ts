import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAveragePriceComponent } from './stock-average-price.component';

describe('StockAveragePriceComponent', () => {
  let component: StockAveragePriceComponent;
  let fixture: ComponentFixture<StockAveragePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAveragePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAveragePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
