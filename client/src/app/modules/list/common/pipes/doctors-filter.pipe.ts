import { Pipe, PipeTransform } from '@angular/core';
import { IDoctorModel } from '../../../doctors/common/model/i-doctor-model';
import { DoctorsLocalSearchService } from '../../../doctors/common/service/doctors-local-search.service';

@Pipe({
  name: 'doctorsFilter'
})
export class DoctorsFilterPipe implements PipeTransform {

  public constructor(private localSearchService: DoctorsLocalSearchService) { }

  public transform(doctors: IDoctorModel[], searchString: string): IDoctorModel[] {
    return this.localSearchService.filter(doctors, searchString);
  }

}
