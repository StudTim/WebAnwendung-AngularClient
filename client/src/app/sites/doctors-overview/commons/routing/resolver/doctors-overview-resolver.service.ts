import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IDoctorModel } from '../../../../../modules/doctors/common/model/i-doctor-model';
import { DoctorsRestService } from '../../../../../modules/doctors/common/service/doctors-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsOverviewResolverService implements Resolve<IDoctorModel[]> {

  constructor(private doctorsRestService: DoctorsRestService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IDoctorModel[] | Observable<IDoctorModel[]> | Promise<IDoctorModel[]> {
    return this.doctorsRestService.all();
  }
}
