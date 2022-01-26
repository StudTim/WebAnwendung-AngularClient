import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }
