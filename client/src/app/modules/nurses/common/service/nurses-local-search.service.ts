import { Injectable } from '@angular/core';
import { RegexService } from 'src/app/common/service/regex.service';
import * as _ from 'underscore';
import { INurseModel } from '../model/i-nurse-model';

@Injectable({
  providedIn: 'root'
})
export class NursesLocalSearchService {

  constructor(private regexService: RegexService) { }

  public filter(nurses: INurseModel[], searchString: string): INurseModel[] {
    const regSearch = this.regexService.convert(searchString);
    return _.isEmpty(searchString) ? nurses : _.filter(nurses, (nurses: INurseModel) => {
      return regSearch.test(nurses.firstname) ||
        regSearch.test(nurses.identifier) ||
        regSearch.test(nurses.lastname)
    });
  }
}
