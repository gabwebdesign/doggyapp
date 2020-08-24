import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, SignUpComponent],
  imports: [
    CommonModule,CoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
