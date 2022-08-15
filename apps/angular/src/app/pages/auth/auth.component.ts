import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnDestroy {
  public isLogging = true;
  public timeoutFn!: any;

  ngOnDestroy(): void {
    clearTimeout(this.timeoutFn);
  }

  public onHandleChangeForm(): void {
    this.isLogging = !this.isLogging;
    clearTimeout(this.timeoutFn);
    const switchCtn = document.querySelector('#switch-cnt');
    switchCtn?.classList.add('is-gx');
    this.timeoutFn = setTimeout(function () {
      switchCtn?.classList.remove('is-gx');
    }, 1500);
  }
}
