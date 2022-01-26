import { Route } from '@angular/router';
import { baseRoute } from './doctors-overview-base-route';
import { doctorsDetailsRoute } from './doctors-overview-doctor-details-route';
import { DoctorsOverviewResolverService } from './resolver/doctors-overview-resolver.service';

export const routes = [
  {
    path: "",
    children: [baseRoute, doctorsDetailsRoute],
    resolve: [DoctorsOverviewResolverService]
  } as Route,

];
