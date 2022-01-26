import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FocusDirectiveModule } from '../focus-directive/focus-directive.module';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { GlobalMenuComponent } from './components/global-menu/global-menu.component';




@NgModule({
  declarations: [GlobalSearchComponent, LayoutComponent, GlobalMenuComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FocusDirectiveModule,
    FormsModule,
    MatMenuModule,
  ]
})
export class LayoutModule { }
