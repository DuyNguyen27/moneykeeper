import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.sevice';

export const AppRoutes: Routes = [
    {
        path: '',
        component: NxWelcomeComponent,
        canActivate: [AuthGuard],
      },
  {
    path: 'login',
    component: AuthComponent,
  },
];