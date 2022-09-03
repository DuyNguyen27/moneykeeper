import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnDestroy {
  public timeoutFn!: any;
  get isLogging() {
    return Boolean(localStorage.getItem('isLogging'));
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutFn);
  }

  public onHandleChangeForm(): void {
    if (localStorage.getItem('isLogging')) {
      localStorage.removeItem('isLogging');
    } else {
      localStorage.setItem('isLogging', 'true');
    }
    clearTimeout(this.timeoutFn);
    const switchCtn = document.querySelector('#switch-cnt');
    switchCtn?.classList.add('is-gx');
    this.timeoutFn = setTimeout(function () {
      switchCtn?.classList.remove('is-gx');
    }, 1500);
  }
}
