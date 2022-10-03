import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
// interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';

// own components
import { AppComponent } from './app.component';

// antd and prime
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { TranslocoRootModule } from './transloco-root.module';
import { StockAveragePriceModule } from './features/stock-average-price/stock-average-price.module';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
    StockAveragePriceModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    CookieService,
  ],
})
export class AppModule {}
