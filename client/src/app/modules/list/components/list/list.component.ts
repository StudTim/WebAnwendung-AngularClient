import { ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSearchService } from '../../../layout/common/service/global-search.service';
import { PatientRestService } from '../../../patients/common/service/patient-rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() public template: any;
  @Input() public items: any[] = [];
  @Input() public filterBy: (items: any[], searchString: string) => any[];
  @Output() public onEntryClicked: EventEmitter<any> = new EventEmitter();
  @Output() public onAddClicked: EventEmitter<void> = new EventEmitter();
  @Output() public onDeleteClicked: EventEmitter<void> = new EventEmitter();

  @ContentChild('listEntry',{static: false}) listEntryRef: TemplateRef<any>;

  constructor(
    public patientRestService: PatientRestService,
    public activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    public globalSearchService: GlobalSearchService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.globalSearchService.plainText.changed.subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

  public onSelectionChange(a): void {
    console.log(a);
  }

}
