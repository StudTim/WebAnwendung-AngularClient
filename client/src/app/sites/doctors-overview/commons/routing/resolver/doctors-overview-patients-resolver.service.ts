import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorsPatientsRestService } from 'src/app/modules/doctors/common/service/doctors-patients-rest.service';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsOverviewPatientsResolverService {

  constructor(
    private doctorsPatientsRestService: DoctorsPatientsRestService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPatientModel[] | Observable<IPatientModel[]> | Promise<IPatientModel[]> {
    return this.doctorsPatientsRestService.all(route.params.id); //ID wird aus Routen Parameter gelesen
    }
}
