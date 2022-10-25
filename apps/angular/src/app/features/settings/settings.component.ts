import {Component, OnInit} from '@angular/core';
import {menuSettings} from '@core/constants/settings.constant'
import {Router} from "@angular/router";

@Component({
  selector: 'angular-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  menu = menuSettings

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
