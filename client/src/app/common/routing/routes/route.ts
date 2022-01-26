import { LayoutComponent } from 'src/app/modules/layout/components/layout/layout.component';
import { patientsRoute } from './patients-route';
import { doctorsRoute } from './doctors-route';
import { nursesRoute } from './nurses-route';

export const routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      patientsRoute,
      doctorsRoute,
      nursesRoute,
    ]
  }
  
];
