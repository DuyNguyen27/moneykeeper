import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm!: UntypedFormGroup;
  private formSummitAttempt!: boolean;

  constructor(
    @Inject(UntypedFormBuilder) private signInFormBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.signInFormInit();
  }

  public signInFormInit(): void {
    this.signInForm = this.signInFormBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public onHandleSignIn(): void {
    // this.formSummitAttempt = true;
    console.log(this.signInForm.value);
    // if (this.SignInForm.valid) {
    //     this.SignInForm.reset();
    // } else {
    //     this.validateAllFormFields(this.SignInForm);
    // }
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
