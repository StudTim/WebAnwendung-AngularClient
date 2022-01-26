import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }

  public convert(str: string): RegExp {
    var regStr: string = ".*";
    _.each(str.split(""), (char: string) => {
      regStr = `${regStr}${char}`;
    });
    return new RegExp(`${regStr}.*`, "i");
  }

}
