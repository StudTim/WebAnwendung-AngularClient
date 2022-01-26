import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesOverviewComponent } from './components/nurses-overview/nurses-overview.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ListModule } from 'src/app/modules/list/list.module';
import { RouterModule } from '@angular/router';
import { NursesListModule } from 'src/app/modules/nurses/modules/nurses-list/nurses-list.module';
import { NursesDetailsModule } from 'src/app/modules/nurses/modules/nurses-details/nurses-details.module';
import { routes } from './commons/routing/routes';




@NgModule({
  declarations: [
    NursesOverviewComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    ListModule,
    NursesDetailsModule,
    NursesListModule,
    RouterModule.forChild(routes),
  ]
})
export class NursesOverviewModule { }
