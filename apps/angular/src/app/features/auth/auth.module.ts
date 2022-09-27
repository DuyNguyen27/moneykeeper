import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { NgPrimeModule } from '../../shared/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd.module';
import { FieldErrorDisplayModule } from '@core/shared/shared.module';
import { TranslocoRootModule } from '@core/transloco-root.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    NgPrimeModule,
    NgZorroAntdModule,
    TranslocoRootModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FieldErrorDisplayModule,
  ],
})
export class AuthModule {}
