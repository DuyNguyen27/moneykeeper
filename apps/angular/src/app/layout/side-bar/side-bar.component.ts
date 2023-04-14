import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router,NavigationEnd, Event } from '@angular/router';
import { sideBarMenu } from '@core/constants/sidebar.constant';

@Component({
  selector: 'angular-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  event$: any;
  public menuData = sideBarMenu;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadAppConfig();
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  loadAppConfig(): void {
    // config open sub menu
    this.event$ = this.router.events.subscribe((event: Event) => {
      this.currentRoute = this.router.url;
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
