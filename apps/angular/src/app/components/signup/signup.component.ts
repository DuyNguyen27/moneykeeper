import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: UntypedFormGroup;
  private formSummitAttempt!: boolean;
  get formData() {
    return this.signUpForm.value;
  }

  constructor(
    @Inject(UntypedFormBuilder) private signUpFormBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpFormInit();
  }

  public signUpFormInit(): void {
    this.signUpForm = this.signUpFormBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onHandleSignUp(): void {
    this.formSummitAttempt = true;
    if (this.signUpForm.valid) {
      this.authService.register(this.formData).subscribe({
        next: (response: any) => {
          const { msg, token } = response;
          this.localStorageService.set('token', token);
          this.router.navigate(['/']);
          this.notification.success('Success', msg);
        },
        error: (e: any) => this.notification.error(e.error, e.message),
      });
    } else {
      this.validateAllFormFields(this.signUpForm);
    }
  }

  isFieldValid(field: string) {
    return (
      (!this.signUpForm.get(field)?.valid &&
        this.signUpForm.get(field)?.touched) ||
      (this.signUpForm.get(field)?.untouched && this.formSummitAttempt) ||
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
