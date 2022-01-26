import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { RegexService } from '../../../../common/service/regex.service';
import { IDoctorModel } from '../model/i-doctor-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsLocalSearchService {

  constructor(private regexService: RegexService) { }

  public filter(doctors: IDoctorModel[], searchString: string): IDoctorModel[] {
    const regSearch = this.regexService.convert(searchString);
    return _.isEmpty(searchString) ? doctors : _.filter(doctors, (doctors: IDoctorModel) => {
      return regSearch.test(doctors.firstname) ||
        regSearch.test(doctors.identifier) ||
        regSearch.test(doctors.lastname)
    });
  }
}
