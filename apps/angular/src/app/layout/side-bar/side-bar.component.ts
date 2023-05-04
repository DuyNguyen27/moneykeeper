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
import { ISidebar, sideBarMenu } from '@core/constants/sidebar.constant';

@Component({
  selector: 'angular-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [Animations.menuExpandCollapse],
})
export class SideBarComponent implements OnInit, OnDestroy {
  @Input() isExpanded!: boolean;
  @Output() onCollapseMenuEvent = new EventEmitter<void>();
  event$: any;
  public menuData = sideBarMenu;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadMenuConfig();
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  isShowArrow = (length: number = 0) =>
    !Boolean(this.isExpanded && Boolean(length));

  loadMenuConfig(): void {
    // config open sub menu
    this.event$ = this.router.events.subscribe((event: Event) => {
      this.currentRoute = this.router.url;
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  onNavigate(item: ISidebar): void {
    if (item?.link) {
    } else {
      item.open = !item.open;
    }
  }

  setCollapseMenu() {
    this.onCollapseMenuEvent.emit();
  }
}
