import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignInModel } from '../../models/form.model';
import { AuthService } from '../../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { of } from 'rxjs';

@Component({
  selector: 'angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm!: UntypedFormGroup;
  public passwordVisible!: boolean;
  private formSummitAttempt!: boolean;

  get formData(): SignInModel {
    return this.signInForm.value;
  }

  constructor(
    @Inject(UntypedFormBuilder) private signInFormBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NzNotificationService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    // if (this.authService.getLoginInfo()) {
    //   this.router.navigate(['/']);
    // }
    this.signInFormInit();
  }

  public signInFormInit(): void {
    this.signInForm = this.signInFormBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      // rememberMe: [false],
    });
  }

  public onHandleSignIn(): void {
    this.formSummitAttempt = true;
    if (this.signInForm.valid) {
      this.authService.login(this.formData).subscribe({
        next: (response: any) => {
          const { email, id, token } = response;
          this.localStorage.setObject('userInfo', { email, id });
          this.localStorage.set('token', token);
          this.router.navigate(['/']);
        },
        error: (e: any) => this.notification.error(e.error, e.message),
      });
    } else {
      this.validateAllFormFields(this.signInForm);
    }
  }

  isFieldValid(field: string) {
    return (
      (!this.signInForm.get(field)?.valid &&
        this.signInForm.get(field)?.touched) ||
      (this.signInForm.get(field)?.untouched && this.formSummitAttempt) ||
      false
    );
  }

  validateAllFormFields(formGroup: UntypedFormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
