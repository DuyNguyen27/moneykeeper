import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@core/features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@core/features/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'tools/tax-calculator',
        loadChildren: () =>
          import('@core/features/tax-calculator/tax-calculator.module').then(
            (m) => m.TaxCalculatorModule
          ),
      },
      {
        path: 'tools/stock-average-price',
        loadChildren: () =>
          import(
            '@core/features/stock-average-price/stock-average-price.module'
          ).then((m) => m.StockAveragePriceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
