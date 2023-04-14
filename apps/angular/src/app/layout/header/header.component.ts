import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'angular-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerTitle = 'Money keeper';
  theme: 'light' | 'dark' = 'light';
  isCollapsed = false;
  constructor(private authService: AuthService) {}

  onHandleLogout() {
    this.authService.doLogoutAndRedirectToLogin();
  }
}
