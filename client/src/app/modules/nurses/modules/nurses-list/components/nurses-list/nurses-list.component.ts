import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSearchService } from 'src/app/modules/layout/common/service/global-search.service';
import { INurseModel } from 'src/app/modules/nurses/common/model/i-nurse-model';
import { NursesRestService } from 'src/app/modules/nurses/common/service/nurses-rest.service';
import { NursesLocalSearchService } from '../../../../common/service/nurses-local-search.service';
import { NursesFormPopupComponent } from '../../../nurses-form/components/nurses-form-popup/nurses-form-popup.component';

@Component({
  selector: 'app-nurses-list',
  templateUrl: './nurses-list.component.html',
  styleUrls: ['./nurses-list.component.scss']
})
export class NursesListComponent implements OnInit {

  public searchString: string = '';

  constructor(
    public nursesRestService: NursesRestService,
    public activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    public globalSearchService: GlobalSearchService,
    private localSearchService: NursesLocalSearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.globalSearchService.plainText.changed.subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

  public onSelectionChange(a): void {
    console.log(a);
  }

  public trackby(nurses: INurseModel): any {
    return nurses.id;
  }

  public filterBy(items: INurseModel[], searchString: string): INurseModel[] {
    return this.localSearchService.filter(items, searchString);
  }

  public onAddButtonClicked(): void {
  }

  public onClick(nurses: INurseModel): void {
    this.router.navigate(["nurses", nurses.id]);
  }

  public onAddClicked(): void {
    this.dialog.open(NursesFormPopupComponent, { disableClose: true })
        .afterClosed().subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

}
