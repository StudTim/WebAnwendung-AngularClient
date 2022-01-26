import { Component, OnInit } from '@angular/core';
import { PatientsHistoryFormValidationService } from '../../common/service/patients-history-form-validation.service';

@Component({
  selector: 'app-patients-history-form',
  templateUrl: './patients-history-form.component.html',
  styleUrls: ['./patients-history-form.component.scss']
})
export class PatientsHistoryFormComponent implements OnInit {

  constructor(
    public readonly patientsHistoryFormValidation: PatientsHistoryFormValidationService,
  ) { }

  ngOnInit(): void {
  }

}
