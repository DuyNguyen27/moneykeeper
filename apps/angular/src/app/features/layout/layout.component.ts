import { Component, OnInit } from '@angular/core';
import { sideBarMenu } from '../../constants/sidebar.constant';
import { IAppConfig } from '../../models/app.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';
  isCollapsedMenu = true;
  public menuData = sideBarMenu;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadAppConfig();
  }

  loadAppConfig(): void {
    const appConfig: IAppConfig | null =
      this.localStorageService.getObject('appConfig');
    if (appConfig) {
      const { theme, isCollapsedMenu } = appConfig;
      this.theme = theme;
      this.isCollapsedMenu = isCollapsedMenu;
    }
  }
}
