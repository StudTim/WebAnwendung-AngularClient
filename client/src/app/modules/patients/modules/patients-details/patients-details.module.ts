import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsDetailsComponent } from './components/patients-details/patients-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { PatientsDetailsCardComponent } from './components/patients-details-card/patients-details-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientsHistoryModule } from '../../../patients-history/patients-history.module';
import { PatientsHistoryListModule } from '../../../patients-history/modules/patients-history-list/patients-history-list.module';



@NgModule({
  declarations: [
    PatientsDetailsComponent, 
    PatientsDetailsCardComponent, 
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    PatientsHistoryModule,
    PatientsHistoryListModule,
  ],
  exports: [
    PatientsDetailsComponent
  ]
})
export class PatientsDetailsModule { }
