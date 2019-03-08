import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CommonCompModule { }
