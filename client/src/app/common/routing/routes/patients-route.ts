import { Route } from '@angular/router';

export const patientsRoute: Route = {
  path: "patients",
  loadChildren: () => import("src/app/sites/patients-overview/patients-overview.module").then(m => m.PatientsOverviewModule)
};
