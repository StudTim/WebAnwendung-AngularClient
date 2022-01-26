import { Route } from '@angular/router';
import { baseRoute } from './nurses-overview-base-route';
import { nursesDetailsRoute } from './nurses-overview-nurses-details-route';
import { NursesOverviewResolverService } from './resolver/nurses-overview-resolver.service';

export const routes = [
  {
    path: "",
    children: [baseRoute, nursesDetailsRoute],
    resolve: [NursesOverviewResolverService]
  } as Route,

];
