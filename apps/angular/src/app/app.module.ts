import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';

import { AppRoutingModule } from './app-routing.module';

// own components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { IconsProviderModule } from './icons-provider.module';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslocoRootModule,
    SharedModule.forRoot(),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
})
export class AppModule {}
