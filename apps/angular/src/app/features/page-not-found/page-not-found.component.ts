import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private readonly _location: Location) {}

  goBack(): void {
    this._location.back();
  }
}
