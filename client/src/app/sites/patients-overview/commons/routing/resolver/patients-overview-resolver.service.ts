import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { PatientRestService } from 'src/app/modules/patients/common/service/patient-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsOverviewResolverService implements Resolve<IPatientModel[]> {

  constructor(private patientRestService: PatientRestService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPatientModel[] | Observable<IPatientModel[]> | Promise<IPatientModel[]> {
    return this.patientRestService.all();
  }

}
