import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Animations } from '@core/animations/animation.trigger';
import { Router, NavigationEnd, Event } from '@angular/router';
import { sideBarMenu } from '@core/constants/sidebar.constant';

@Component({
  selector: 'angular-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [Animations.expandTrigger],
})
export class SideBarComponent implements OnInit, OnDestroy {
  @Input() isCollapse!: boolean;
  @Output() onCollapseMenuEvent = new EventEmitter<void>();
  event$: any;
  public menuData = sideBarMenu;
  currentRoute: string = '';

  styleCollapse = this.isCollapse ? 'width : 100px; left : 30px' : '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadAppConfig();
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  setCollapseMenu() {
    this.onCollapseMenuEvent.emit();
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
