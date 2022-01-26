import { Injectable } from '@angular/core';
import { IPatientModel } from '../model/i-patient-model';
import * as _ from 'underscore';
import { RegexService } from 'src/app/common/service/regex.service';

@Injectable({
  providedIn: 'root'
})
export class PatientLocalSearchService {

  constructor(private regexService: RegexService) { }


  public filter(patients: IPatientModel[], searchString: string): IPatientModel[] {
    const regSearch = this.regexService.convert(searchString);
    return _.isEmpty(searchString) ? patients :  _.filter(patients, (patient: IPatientModel) => {
      return regSearch.test(patient.firstname) ||
             regSearch.test(patient.identifier) ||
             regSearch.test(patient.lastname)
    });
  }

}
