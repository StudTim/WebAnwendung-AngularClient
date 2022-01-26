import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import { PatientHistoryRestService } from '../../../../common/service/patient-history-rest.service';

@Component({
  selector: 'app-patients-history-list',
  templateUrl: './patients-history-list.component.html',
  styleUrls: ['./patients-history-list.component.scss']
})
export class PatientsHistoryListComponent implements OnInit {

  constructor(
    public patientHistoryRestService: PatientHistoryRestService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  public onAddClicked(): void {
    console.log("Danny und Ich wussten Es!");
  }

}
