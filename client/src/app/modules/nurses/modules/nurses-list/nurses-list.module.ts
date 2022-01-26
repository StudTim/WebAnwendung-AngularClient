import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesListComponent } from './components/nurses-list/nurses-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ListModule } from '../../../list/list.module';
import { NursesFilterPipe } from '../../../list/common/pipes/nurses-filter.pipe';



@NgModule({
  declarations: [
    NursesListComponent,
    NursesFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ListModule,
    MatDialogModule
  ],
  exports:[
    NursesListComponent,
    NursesFilterPipe
  ]
})
export class NursesListModule { }
