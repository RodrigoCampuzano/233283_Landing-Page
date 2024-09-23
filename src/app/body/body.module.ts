import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    CardsDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    CardsDashboardComponent
  ]
})
export class BodyModule { }
