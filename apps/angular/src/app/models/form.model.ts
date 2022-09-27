export class SignInModel {
  username!: string;
  password!: string;
  // rememberMe!: boolean;
}

export class SignUpModel {
  name!: string;
  email!: string;
  password!: string;
}

export class taxModel {
  income!: number;
  insuranceAmount!: number;
  region!: number;
  quantity!: number;
  socialInsurance!: number;
  healthInsurance!: number;
  unemploymentInsurance!: number;
  taxPay!: number;
  incomeAfterTax!: number;
}
