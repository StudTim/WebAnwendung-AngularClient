import { Component, OnInit } from '@angular/core';
import { NursesFormValidationService } from '../../common/service/nurses-form-validation.service';

@Component({
  selector: 'app-nurses-form',
  templateUrl: './nurses-form.component.html',
  styleUrls: ['./nurses-form.component.scss']
})
export class NursesFormComponent implements OnInit {

  constructor(
    public readonly nursesFormValidationService: NursesFormValidationService,
  ) { }

  ngOnInit(): void {
  }

}
