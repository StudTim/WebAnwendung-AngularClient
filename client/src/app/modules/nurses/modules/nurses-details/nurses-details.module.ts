import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesDetailsComponent } from './components/nurses-details/nurses-details.component';
import { NursesDetailsCardComponent } from './components/nurses-details-card/nurses-details-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NursesDetailsComponent,
    NursesDetailsCardComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FlexLayoutModule,
  ],
  exports: [
    NursesDetailsComponent,
    NursesDetailsCardComponent
  ]
})
export class NursesDetailsModule { }
