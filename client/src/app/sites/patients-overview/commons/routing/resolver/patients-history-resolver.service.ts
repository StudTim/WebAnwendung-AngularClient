import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPatientHistoryModel } from '../../../../../modules/patients-history/common/model/i-patient-history-model';
import { PatientHistoryRestService } from '../../../../../modules/patients-history/common/service/patient-history-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsHistoryResolverService implements Resolve<IPatientHistoryModel[]> {

  constructor(
    private patientHistoryRestService: PatientHistoryRestService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPatientHistoryModel[] | Observable<IPatientHistoryModel[]> | Promise<IPatientHistoryModel[]> {
    return this.patientHistoryRestService.all(route.params.id); //ID wird aus Routen Parameter gelesen
    }
}
