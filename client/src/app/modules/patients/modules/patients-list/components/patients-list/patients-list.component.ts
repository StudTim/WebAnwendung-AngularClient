import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSearchService } from 'src/app/modules/layout/common/service/global-search.service';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { PatientRestService } from 'src/app/modules/patients/common/service/patient-rest.service';
import { PatientLocalSearchService } from '../../../../common/service/patient-local-search.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsListComponent implements OnInit {

  public searchString: string = '';

  constructor(
    public patientRestService: PatientRestService,
    public activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    public globalSearchService: GlobalSearchService,
    private localSearchService: PatientLocalSearchService,
    private router: Router,
  ) {  }


  public ngOnInit(): void {
    this.globalSearchService.plainText.changed.subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

  public onSelectionChange(a): void {
    console.log(a);
  }

  public trackby(patient: IPatientModel): any {
    return patient.id;
  }

  public onAddButtonClicked(): void {
    this.router.navigate(["patients", "add"]);
  }

  public filterBy(items: IPatientModel[], searchString: string): IPatientModel[] {
    return this.localSearchService.filter(items, searchString);
  }

  public onClick(patient: IPatientModel): void {
    this.router.navigate(["patients", patient.id]);
  }

  public onAddClicked(): void {
    const currentId = this.activatedRoute.snapshot.params["id"];
    const queryParams = currentId === undefined ? null : { id: currentId };
    this.router.navigate(["patients", "add"], {queryParams : queryParams});
  }

  public onDeleteClicked(): void {

    console.log("Löschen des Patienten " + this.activatedRoute.snapshot.params["id"]);

    this.patientRestService.delete(this.activatedRoute.snapshot.params["id"]);
    
    this.router.navigate(["patients"]);
  }
}
