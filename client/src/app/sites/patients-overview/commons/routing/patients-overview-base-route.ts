import { Route } from '@angular/router';
import { PatientsOverviewComponent } from 'src/app/sites/patients-overview/components/patients-overview/patients-overview.component';
import { addPatientRoute } from './patients-overview-add-patient-route';

export const baseRoute: Route = {
  path: "",
  children: [addPatientRoute],
  component: PatientsOverviewComponent,
};
