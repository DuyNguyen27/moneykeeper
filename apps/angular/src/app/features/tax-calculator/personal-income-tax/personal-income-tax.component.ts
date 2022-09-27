import { Component, Inject, OnInit } from '@angular/core';
import { taxModel } from '@core/models/form.model';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { validateAllFormFields } from '@core/helpers/form.helper';

interface IRegions {
  name: string;
  code: string;
}

@Component({
  selector: 'angular-personal-income-tax',
  templateUrl: './personal-income-tax.component.html',
  styleUrls: ['./personal-income-tax.component.scss'],
})
export class PersonalIncomeTaxComponent implements OnInit {
  regions: IRegions[];
  title = 'Trích nộp bảo hiểm';
  taxForm!: UntypedFormGroup;
  result!: taxModel;
  isAllFieldsValid: boolean = true;

  get getFormData() {
    return this.taxForm.value;
  }
  constructor(
    @Inject(UntypedFormBuilder) private taxFormBuilder: UntypedFormBuilder
  ) {
    this.regions = [
      { name: 'Vùng 1', code: '1' },
      { name: 'Vùng 2', code: '2' },
      { name: 'Vùng 3', code: '3' },
      { name: 'Vùng 4', code: '4' },
    ];
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.taxForm = this.taxFormBuilder.group({
      income: [null, [Validators.required]],
      insuranceAmount: [null, Validators.required],
      region: ['1', Validators.required],
      quantity: ['1'],
      socialInsurance: ['8', Validators.required],
      healthInsurance: ['1.5', Validators.required],
      unemploymentInsurance: ['1', Validators.required],
    });
  }

  onHandleSubmitForm() {
    if (this.taxForm.valid) {
      this.isAllFieldsValid = true;
      this.result = {
        ...this.getFormData,
      };
      console.log(this.result);
    } else {
      this.isAllFieldsValid = false;
      validateAllFormFields(this.taxForm);
    }
  }

  taxCalculator() {
    
  }
}
