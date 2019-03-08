import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'', component:UserlistComponent}, // user list component
  {path:'detail', component:DetailComponent}, // user detail component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
