import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { sideBarMenu } from '../../constants/sidebar.constant';
import { IAppConfig } from '../../models/app.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  theme: 'light' | 'dark' = 'light';
  isCollapsedMenu = true;
  public menuData = sideBarMenu;
  event$: any;
  currentRoute: string = '';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppConfig();
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  loadAppConfig(): void {
    // config system preference
    const appConfig: IAppConfig | null =
      this.localStorageService.getObject('appConfig');
    if (appConfig) {
      const { theme, isCollapsedMenu } = appConfig;
      this.theme = theme;
      this.isCollapsedMenu = isCollapsedMenu;
    }
    // config open sub menu
    this.event$ = this.router.events.subscribe((event: Event) => {
      this.currentRoute = this.router.url;
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
