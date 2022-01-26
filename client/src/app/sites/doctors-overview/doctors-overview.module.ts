import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsOverviewComponent } from './components/doctors-overview/doctors-overview.component';
import { RouterModule } from '@angular/router';
import { routes } from './commons/routing/routes';
import { DoctorsListModule } from '../../modules/doctors/modules/doctors-list/doctors-list.module';
import { MatButtonModule } from '@angular/material/button';
import { ListModule } from '../../modules/list/list.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DoctorsDetailsModule } from '../../modules/doctors/modules/doctors-details/doctors-details.module';


@NgModule({
  declarations: [
    DoctorsOverviewComponent
  ],
  imports: [
    CommonModule,
    DoctorsDetailsModule,
    DoctorsListModule,
    MatSidenavModule,
    MatButtonModule,
    ListModule,
    RouterModule.forChild(routes),
  ]
})
export class DoctorsOverviewModule { }
