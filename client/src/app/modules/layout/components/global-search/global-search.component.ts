import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ObservableValue } from 'src/app/common/util/observable-value';
import { GlobalSearchService } from '../../common/service/global-search.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush //Angular Aktualisiert nur auf "Befehl"
})
export class GlobalSearchComponent implements OnInit {

  public showSearchBar: ObservableValue<boolean> = new ObservableValue(false);
  public focusInput: ObservableValue<boolean> = new ObservableValue(false);

  public searchText: string = "";

  constructor(private cdr: ChangeDetectorRef, private globalSearchService: GlobalSearchService) { }

  public ngOnInit(): void {
    this.showSearchBar.changed.next(this.cdr.markForCheck.bind(this.cdr));
    this.focusInput.changed.next(this.cdr.markForCheck.bind(this.cdr));
  }

  public onInputBlur(): void {
    this.showSearchBar.value = false;
    this.focusInput.value = false;
  }

  public onSearchClicked(): void {
    this.showSearchBar.value = true;
    this.focusInput.value = true;
  }

  public onInputKeyUp(): void {
    this.globalSearchService.plainText.value = this.searchText;
  }

}
