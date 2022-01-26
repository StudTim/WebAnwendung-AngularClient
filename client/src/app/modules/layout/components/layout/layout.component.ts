import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/common/service/ui.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showGlobalMenu: boolean = false;

  constructor(
    public uiService: UiService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.uiService.pageTitle.changed.subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

}
