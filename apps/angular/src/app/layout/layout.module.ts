import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslocoRootModule } from '../transloco-root.module';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';

import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { SpeeddialComponent } from '@core/components/speeddial/speeddial.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideBarComponent,
    SpeeddialComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzMenuModule,
    NzLayoutModule,
    NzDropDownModule,
    NzIconModule,
    TranslocoRootModule,
    AvatarModule,
    InputTextModule,
    NzSwitchModule,
    FormsModule,
    SpeedDialModule,
  ],
})
export class LayoutModule {}
