import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentifierGeneratorService } from '../../../../../../common/service/identifier-generator.service';

@Injectable({
  providedIn: 'root'
})
export class NursesFormValidationService {

  public readonly fieldFirstName: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldLastName: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldIdentifier: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)])

  public readonly fields: FormGroup = new FormGroup({
    firstname: this.fieldFirstName,
    lastname: this.fieldLastName,
    identifier: this.fieldIdentifier,
  });

  constructor(
    public readonly identifierGeneratorService: IdentifierGeneratorService
  ) {
    this.reset();
  }

  public reset(): void {
    this.fields.reset;
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
    return "PANIC!!!"
  }

  public get lastNameErrors(): string | null {
    if (this.fieldLastName.errors === null || this.fieldLastName.errors === undefined) {
      return null;
    }
    if (this.fieldLastName.errors['requiered']) {
      return 'Pflichtfeld';
    }
    if (this.fieldLastName.errors['maxlength']) {
      return "Nicht mehr als 50 Zeichen zugelassen"
    }
    return "HELP!"
  }

  public get identifierErrors(): string | null {
    if (this.fieldIdentifier.errors === null || this.fieldIdentifier.errors === undefined) {
      return null;
    }
    if (this.fieldIdentifier.errors['requiered']) {
      return 'Pflichfeld';
    }
    if (this.fieldIdentifier.errors['maxlength']) {
      return "Nicht mehr als 50 Zeichen zugelassen"
    }
    return "PANIC!"
  }

  public get percentageCompletion(): number {
    let percentage: number = 0;
    percentage += this.fieldFirstName.valid ? 25 : 0;
    percentage += this.fieldLastName.valid ? 25 : 0;
    percentage += this.fieldIdentifier.valid ? 25 : 0;
    return percentage;
  }

}
