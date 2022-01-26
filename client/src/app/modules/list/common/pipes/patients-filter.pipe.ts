import { Pipe, PipeTransform } from '@angular/core';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { PatientLocalSearchService } from 'src/app/modules/patients/common/service/patient-local-search.service';

@Pipe({
  name: 'patientsFilter'
})
export class PatientsFilterPipe implements PipeTransform {

  public constructor(private localSearchService: PatientLocalSearchService) {}

  public transform(patients: IPatientModel[], searchString: string): IPatientModel[] {
    return this.localSearchService.filter(patients, searchString);
  }

}
