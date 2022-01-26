import { Route } from '@angular/router';
import { NursesOverviewComponent } from '../../components/nurses-overview/nurses-overview.component';

export const nursesDetailsRoute: Route = {
  path: ":id",
  component: NursesOverviewComponent,
  resolve: []
};
