import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
  ],
})
export class NgPrimeModule {}
