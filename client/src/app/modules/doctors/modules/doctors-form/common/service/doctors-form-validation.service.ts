import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentifierGeneratorService } from '../../../../../../common/service/identifier-generator.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsFormValidationService {

  public readonly fieldFirstName: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(20)]);
  public readonly fieldLastName: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(20)]);
  public readonly fieldIdentifier: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldField: FormControl =
    new FormControl(null, [Validators.maxLength(40)])

  public readonly fields: FormGroup = new FormGroup({
    firstname: this.fieldFirstName,
    lastname: this.fieldLastName,
    identifier: this.fieldIdentifier,
    field: this.fieldField,
  });


  constructor(
    public readonly identifierGeneratorService: IdentifierGeneratorService,
  ) {
    this.reset();
  }

  public reset(): void {
    this.fields.reset();
    this.fieldIdentifier.setValue(this.identifierGeneratorService.generateIdentifier());
  }


  public get firstNameErrors(): string | null {
    if (this.fieldFirstName.errors === null || this.fieldFirstName.errors === undefined) {
      return null;
    }
    if (this.fieldFirstName.errors['required']) {
      return 'Pflichtfeld';
    }
    if (this.fieldFirstName.errors['maxlength']) {
      return 'Nicht mehr als 50 Zeichen zugelassen';
    }
    return "Nice"
  }

  public get lastNameErrors(): string | null {
    if (this.fieldLastName.errors === null || this.fieldLastName.errors === undefined) {
      return null;
    }
    if (this.fieldLastName.errors['required']) {
      return 'Pflichtfeld';
    }
    if (this.fieldLastName.errors['maxlength']) {
      return 'Nicht mehr als 50 Zeichen zugelassen';
    }
    return "Nice"
  }

  public get identifierErrors(): string | null {
    if (this.fieldIdentifier.errors === null || this.fieldIdentifier.errors === undefined) {
      return null;
    }
    if (this.fieldIdentifier.errors["required"]) {
      return 'Pflichtfeld';
    }
    if (this.fieldIdentifier.errors['maxlength']) {
      return 'Maximal 50 Zeichen zugelassen';
    }
    return "Nice";
  }

  public get fieldErrors(): string | null {
    if (this.fieldField.errors === null || this.fieldField.errors === undefined) {
      return null;
    }
    if (this.fieldField.errors["required"]) {
      return 'Pflichtfeld';
    }
    if (this.fieldField.errors['pattern']) {
      return 'Gültige UUID angeben';
    }
    return "Nice";
  }

  public get percentageCompletion(): number {
    let percentage: number = 0;
    percentage += this.fieldFirstName.valid ? 25 : 0;
    percentage += this.fieldLastName.valid ? 25 : 0;
    percentage += this.fieldIdentifier.valid ? 25 : 0;
    percentage += this.fieldField.valid ? 25 : 0;
    return percentage;
  }
}
