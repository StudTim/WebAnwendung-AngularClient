import { Component, OnInit } from '@angular/core';
import { DoctorsFormValidationService } from '../../common/service/doctors-form-validation.service';

@Component({
  selector: 'app-doctors-form',
  templateUrl: './doctors-form.component.html',
  styleUrls: ['./doctors-form.component.scss']
})
export class DoctorsFormComponent implements OnInit {

  constructor(
    public readonly doctorsFormValidationService: DoctorsFormValidationService,
  ) {

  }

  ngOnInit(): void {
  }

}
