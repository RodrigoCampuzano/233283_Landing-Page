import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    FooterDashboardComponent
  ],
  imports: [
    CommonModule,
    MatIcon
  ],
  exports: [
    FooterDashboardComponent
  ]
})
export class FooterModule { }
