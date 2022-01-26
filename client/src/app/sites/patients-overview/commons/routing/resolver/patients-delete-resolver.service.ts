import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPatientModel } from '../../../../../modules/patients/common/model/i-patient-model';
import { PatientRestService } from '../../../../../modules/patients/common/service/patient-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsDeleteResolverService {

  constructor(
    private patientRestService: PatientRestService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<boolean> {
    console.log("Möglicher Workaround gewesen zum löschen aus URL Input");
    //this.patientRestService.delete("1");
    return this.router.navigate(["patients"]);
  }
}
