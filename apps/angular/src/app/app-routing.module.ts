import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.sevice';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
