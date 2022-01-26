import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PatientsOverviewComponent } from './components/patients-overview/patients-overview.component'; //Ehemals RootComponent
import { PatientsListModule } from '../../modules/patients/modules/patients-list/patients-list.module'; 
import { PatientsDetailsModule } from '../../modules/patients/modules/patients-details/patients-details.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { routes } from './commons/routing/routes'
import { ListModule } from '../../modules/list/list.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PatientsOverviewComponent
  ],
  imports: [
    CommonModule,
    PatientsListModule,
    PatientsDetailsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    ListModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientsOverviewModule { }
