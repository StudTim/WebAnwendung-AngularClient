import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentifierGeneratorService } from '../../../../../../common/service/identifier-generator.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsHistoryFormValidationService {

  public readonly fieldShortEntry: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldLongEntry: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldIdentifier: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);


  public readonly fields: FormGroup = new FormGroup({
    shortEntry: this.fieldShortEntry,
    longEntry: this.fieldLongEntry,
    fieldIdentifier: this.fieldIdentifier,
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


  public get shortEntryErrors(): string | null {
    if (this.fieldShortEntry.errors === null || this.fieldShortEntry.errors === undefined) {
      return null;
    }
    if (this.fieldShortEntry.errors['required']) {
      return 'Pflichtfeld';
    }
    if (this.fieldShortEntry.errors['maxlength']) {
      return 'Nicht mehr als 50 Zeichen zugelassen';
    }
    return "PANIC!!!"
  }

  public get longEntryErrors(): string | null {
    if (this.fieldLongEntry.errors === null || this.fieldLongEntry.errors === undefined) {
      return null;
    }
    if (this.fieldLongEntry.errors['required']) {
      return 'Pflichtfeld';
    }
    if (this.fieldLongEntry.errors['maxlength']) {
      return 'Nicht mehr als 50 Zeichen zugelassen';
    }
    return "PANIC!!!"
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
    return "In einer Weit Weit entfernten Galaxis";
  }

  public get percentageCompletion(): number {
    let percentage: number = 0;
    percentage += this.fieldShortEntry.valid ? 25 : 0;
    percentage += this.fieldLongEntry.valid ? 25 : 0;
    percentage += this.fieldIdentifier.valid ? 25 : 0;
    return percentage;
  }
}
