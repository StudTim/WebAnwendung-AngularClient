import { Route } from '@angular/router';
import { DoctorsOverviewComponent } from '../../components/doctors-overview/doctors-overview.component';
import { DoctorsOverviewPatientsResolverService } from './resolver/doctors-overview-patients-resolver.service';


export const doctorsDetailsRoute: Route = {
  path: ":id",
  component: DoctorsOverviewComponent,
  resolve: [DoctorsOverviewPatientsResolverService]
};
