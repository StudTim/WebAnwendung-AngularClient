import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PatientsFormPopupComponent } from '../../../../../modules/patients/modules/patients-form/components/patients-form-popup/patients-form-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PatientsCreateFormResolverService implements Resolve<void>{

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {

    return this.dialog.open(PatientsFormPopupComponent).afterClosed().pipe(tap(() => {
      const navigationPoint = route.queryParams["id"] === undefined ? ["patients"] : ["patients", route.queryParams["id"]]
      this.router.navigate(navigationPoint);
    }));
  }
}
