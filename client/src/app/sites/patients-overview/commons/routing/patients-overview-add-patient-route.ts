import { Route } from '@angular/router';
import { PatientsOverviewComponent } from '../../components/patients-overview/patients-overview.component';
import { PatientsCreateFormResolverService } from './resolver/patients-create-form-resolver.service';

export const addPatientRoute: Route = {

  path: "add",
  component: PatientsOverviewComponent,
  resolve: [PatientsCreateFormResolverService]

}
