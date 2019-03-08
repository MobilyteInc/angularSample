import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonCompModule } from '../common/commonComp.module';
import { TemplateRoutingModule } from './template-routing.module';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasiclayoutComponent } from '../layout/basiclayout/basiclayout.component';
import { TransferPipe } from '../pipes/transfer.pipe'

@NgModule({
  declarations: [SettingComponent, DashboardComponent, BasiclayoutComponent, TransferPipe],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CommonCompModule, 
  ]
})
export class TemplateModule { }
