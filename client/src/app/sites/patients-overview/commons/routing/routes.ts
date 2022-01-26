import { Route } from '@angular/router';
import { baseRoute } from './patients-overview-base-route';
import { patientDetailsRoute } from './patients-overview-patient-details-route';
import { PatientsOverviewResolverService } from './resolver/patients-overview-resolver.service';

export const routes = [
  {
    path: "",
    children: [baseRoute, patientDetailsRoute],
    resolve: [PatientsOverviewResolverService]
  } as Route,

];
