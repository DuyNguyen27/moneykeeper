import { NgModule } from '@angular/core';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  exports: [
    NzCheckboxModule,
    NzIconModule,
    NzNotificationModule,
    NzMessageModule,
    NzMenuModule,
    NzLayoutModule,
    NzDropDownModule
  ],
})
export class NgZorroAntdModule {}
