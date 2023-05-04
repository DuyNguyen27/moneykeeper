import { Component, OnInit } from '@angular/core';
import { IAppConfig } from '@core/models/app.model';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { Animations } from '@core/animations/animation.trigger';

@Component({
  selector: 'angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [Animations.bodyExpandCollapse],
})
export class LayoutComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';
  isExpandedMenu = true;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadAppConfig();
  }

  setCollapse() {
    this.isExpandedMenu = !this.isExpandedMenu;
  }

  loadAppConfig(): void {
    // config system preference
    const appConfig: IAppConfig | null =
      this.localStorageService.getObject('appConfig');
    if (appConfig) {
      const { theme, isExpandedMenu } = appConfig;
      this.theme = theme;
      this.isExpandedMenu = isExpandedMenu;
    }
  }
}
