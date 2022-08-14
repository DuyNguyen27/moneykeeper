import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'angular-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor() {}

  public isLogging: boolean = true;
  public timeoutFn!: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    clearTimeout(this.timeoutFn);
  }

  public onHandleChangeForm(): void {
    clearTimeout(this.timeoutFn);
    const switchCtn = document.querySelector('#switch-cnt');
    switchCtn?.classList.add('is-gx');
    this.timeoutFn = setTimeout(function () {
      switchCtn?.classList.remove('is-gx');
    }, 1500);
    this.isLogging = !this.isLogging;
  }
}
