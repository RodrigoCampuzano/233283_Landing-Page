import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    HeaderDashboardComponent
  ]
})
export class HeaderModule { }
