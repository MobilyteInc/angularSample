import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { BasiclayoutComponent } from './layout/basiclayout/basiclayout.component';
import { ErrorpageComponent } from './layout/errorpage/errorpage.component';
import { AuthGuardService, } from './services/AuthGuard/auth-guard.service';

// Routers
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path:'',  loadChildren:'./template/template.module#TemplateModule'},
  { path: 'login', component: LoginComponent,}, 
  { path: 'register', component: SignupComponent },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
