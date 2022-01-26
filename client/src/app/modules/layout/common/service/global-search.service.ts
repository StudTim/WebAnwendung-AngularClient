import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RegexService } from 'src/app/common/service/regex.service';
import { ObservableValue } from 'src/app/common/util/observable-value';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  public readonly plainText: ObservableValue<string> = new ObservableValue("");
  public readonly regexSearch: ObservableValue<RegExp> = new ObservableValue(); 


  constructor(private regexService: RegexService) { 

    this.plainText.changed
      .pipe(tap((plainttext: string) => {
        this.regexSearch.value = this.regexService.convert(plainttext);
      }));

  }
}
