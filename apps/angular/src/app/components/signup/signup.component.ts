import { Component, Inject, OnInit } from '@angular/core';
import { Validators, UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'angular-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: UntypedFormGroup;
  private formSummitAttempt!: boolean;

  constructor(
    @Inject(UntypedFormBuilder) private signUpFormBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.signUpFormInit();
  }

  public signUpFormInit(): void {
    this.signUpForm = this.signUpFormBuilder.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public onHandleSignUp(): void {
    // this.formSummitAttempt = true;
    console.log(this.signUpForm.value);
    // if (this.signUpForm.valid) {
    //     this.signUpForm.reset();
    // } else {
    //     this.validateAllFormFields(this.signUpForm);
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
