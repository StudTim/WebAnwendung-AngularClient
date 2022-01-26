import { Pipe, PipeTransform } from '@angular/core';
import { IDoctorModel } from '../../../doctors/common/model/i-doctor-model';
import { INurseModel } from '../../../nurses/common/model/i-nurse-model';
import { NursesLocalSearchService } from '../../../nurses/common/service/nurses-local-search.service';

@Pipe({
  name: 'nursesFilter'
})
export class NursesFilterPipe implements PipeTransform {

  public constructor(private localSearchService: NursesLocalSearchService) { }

  public transform(nurses: INurseModel[], searchString: string): INurseModel[] {
    return this.localSearchService.filter(nurses, searchString);
  }

}
