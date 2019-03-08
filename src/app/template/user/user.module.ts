import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [UserlistComponent, DetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
