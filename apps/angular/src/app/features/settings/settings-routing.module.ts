import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {
    path: '', component: SettingsComponent, children: [
      {
        path: 'account',
        loadComponent: () =>
          import('./profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'general',
        loadComponent: () =>
          import('./general/general.component').then(
            (m) => m.GeneralComponent
          ),
      },
      {
        path: 'personalization',
        loadChildren: () =>
          import('../tax-calculator/tax-calculator.module').then(
            (m) => m.TaxCalculatorModule
          ),
      },
      {
        path: 'security',
        loadChildren: () =>
          import('../tax-calculator/tax-calculator.module').then(
            (m) => m.TaxCalculatorModule
          ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
