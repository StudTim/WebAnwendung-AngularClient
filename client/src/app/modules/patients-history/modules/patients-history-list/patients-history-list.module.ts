import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsHistoryListComponent } from './components/patients-history-list/patients-history-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PatientsHistoryListItemComponent } from './components/patients-history-list-item/patients-history-list-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    PatientsHistoryListComponent,
    PatientsHistoryListItemComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    PatientsHistoryListComponent
  ]
})
export class PatientsHistoryListModule { }
