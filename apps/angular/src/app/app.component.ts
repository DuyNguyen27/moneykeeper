import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'angular-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.initApp();
  }
  initApp(): void {}
}
