import { Route } from '@angular/router';
import { PatientsOverviewComponent } from 'src/app/sites/patients-overview/components/patients-overview/patients-overview.component';
import { deletePatientRoute } from './patients-overview-delete-patient-route';
import { PatientsHistoryResolverService } from './resolver/patients-history-resolver.service';


export const patientDetailsRoute: Route = {
  path: ":id",
  children: [deletePatientRoute],
  component: PatientsOverviewComponent,
  resolve: [PatientsHistoryResolverService]
};
