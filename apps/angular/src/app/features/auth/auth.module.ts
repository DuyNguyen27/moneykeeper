import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { FieldErrorDisplayComponent } from '../../components/field-error-display/field-error-display.component';
import { NgPrimeModule } from '../../shared/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd.module';
import { TranslocoRootModule } from '../../transloco-root.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    FieldErrorDisplayComponent,
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    NgZorroAntdModule,
    TranslocoRootModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
