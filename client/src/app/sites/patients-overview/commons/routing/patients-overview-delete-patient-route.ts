import { Route } from '@angular/router';
import { PatientsOverviewComponent } from 'src/app/sites/patients-overview/components/patients-overview/patients-overview.component';
import { PatientsDeleteResolverService } from './resolver/patients-delete-resolver.service';


export const deletePatientRoute: Route = {

  path: "delete",
  component: PatientsOverviewComponent,
  resolve: [PatientsDeleteResolverService]
};
