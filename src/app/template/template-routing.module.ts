import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasiclayoutComponent } from '../layout/basiclayout/basiclayout.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../services/AuthGuard/auth-guard.service';

const routes: Routes = [
  {
    path:'' , component:BasiclayoutComponent, canActivate: [AuthGuardService],
    children:[
      {path:'', component:DashboardComponent},
      {path:'setting', component:SettingComponent},
      {path:'user', loadChildren:'./user/user.module#UserModule'},
      {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
