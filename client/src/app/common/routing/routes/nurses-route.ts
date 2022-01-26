import { Route } from '@angular/router';

export const nursesRoute: Route = {
  path: "nurses",
  loadChildren: () => import("src/app/sites/nurses-overview/nurses-overview.module").then(m => m.NursesOverviewModule)
};
