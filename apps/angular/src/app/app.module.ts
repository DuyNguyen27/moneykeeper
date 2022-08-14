import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
