import { Component, OnInit } from '@angular/core';
import { PatientsFormValidationService } from '../../common/service/patients-form-validation.service';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.scss'],
})
export class PatientsFormComponent implements OnInit {

  constructor(
    public readonly patientsFormValidationService: PatientsFormValidationService,
  ) {

  }

  public ngOnInit(): void {
    
  }

}
