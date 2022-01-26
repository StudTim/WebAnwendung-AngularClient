import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSearchService } from '../../../../../layout/common/service/global-search.service';
import { IDoctorModel } from '../../../../common/model/i-doctor-model';
import { DoctorsLocalSearchService } from '../../../../common/service/doctors-local-search.service';
import { DoctorsPatientsRestService } from '../../../../common/service/doctors-patients-rest.service';
import { DoctorsRestService } from '../../../../common/service/doctors-rest.service';
import { DoctorsFormPopupComponent } from '../../../doctors-form/components/doctors-form-popup/doctors-form-popup.component';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  public searchString: string = '';

  constructor(
    public doctorsRestService: DoctorsRestService,
    public doctorsPatientRestService: DoctorsPatientsRestService,
    public activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    public globalSearchService: GlobalSearchService,
    private localSearchService: DoctorsLocalSearchService,
    private router: Router
  ) { }


  public ngOnInit(): void {
    this.globalSearchService.plainText.changed.subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

  public onSelectionChange(a): void {
    console.log(a);
  }

  public trackby(doctor: IDoctorModel): any {
    return doctor.id;
  }

  public filterBy(items: IDoctorModel[], searchString: string): IDoctorModel[] {
    return this.localSearchService.filter(items, searchString);
  }

  public onAddButtonClicked(): void {
  }

  public onClick(doctor: IDoctorModel): void {
    this.router.navigate(["doctors", doctor.id]);
  }

  public onAddClicked(): void {
    this.dialog.open(DoctorsFormPopupComponent, { disableClose: true })
        .afterClosed().subscribe(this.cdr.markForCheck.bind(this.cdr));
  }

  public onDeleteClicked(): void {

    console.log("Löschen des Doktors" + this.activatedRoute.snapshot.params["id"]);

    this.doctorsRestService.delete(this.activatedRoute.snapshot.params["id"]);

    this.router.navigate(["doctors"]); //Nach löschen Zurück zu doctors
  }
}
