import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  headerTitle = 'Money keeper';
  theme: 'light' | 'dark' = 'light';
  isCollapsed = false;

  ngOnInit(): void {}
}
