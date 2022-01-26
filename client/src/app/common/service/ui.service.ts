import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { ObservableValue } from '../util/observable-value';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public pageTitle: ObservableValue<string> = new ObservableValue("");

  constructor() { }


  public setPageTitle(title: string): void {
    _.defer(() => {
      window.document.title = title;
      this.pageTitle.value = title;
    });
  }

}
