import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import * as _ from 'underscore';
import { IPatientHistoryModel } from '../../../../common/model/i-patient-history-model';
import { PatientHistoryRestService } from '../../../../common/service/patient-history-rest.service';

@Component({
  selector: 'app-patients-history-list-item',
  templateUrl: './patients-history-list-item.component.html',
  styleUrls: ['./patients-history-list-item.component.scss']
})
export class PatientsHistoryListItemComponent implements OnInit {

  @Input() public patientHistory: IPatientHistoryModel;

  constructor(
    public patientHistoryRestService: PatientHistoryRestService
  ) {
  }

  ngOnInit(): void {
  }

  public onDeleteClicked(): void {

    console.log("Löschen der Patienten Historie. PatientenId: ["
      + this.patientHistory.patientenId + "]"
      + "HistorieId: [" + this.patientHistory.id + "]");

    this.patientHistoryRestService.delete(this.patientHistory.patientenId, this.patientHistory.id);

  }

}
