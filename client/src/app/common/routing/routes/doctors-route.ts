import { Route } from '@angular/router';

export const doctorsRoute: Route = {
  path: "doctors",
  loadChildren: () => import("src/app/sites/doctors-overview/doctors-overview.module").then(m => m.DoctorsOverviewModule)
};
