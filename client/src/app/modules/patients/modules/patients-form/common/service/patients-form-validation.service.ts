import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentifierGeneratorService } from '../../../../../../common/service/identifier-generator.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsFormValidationService {

  public readonly fieldFirstName: FormControl = 
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldLastName: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldComment: FormControl = 
    new FormControl(null, [Validators.maxLength(200)]);
  public readonly fieldIdentifier: FormControl =
    new FormControl(null, [Validators.required, Validators.maxLength(50)]);
  public readonly fieldpatientDoctorId: FormControl =
    new FormControl(null, [Validators.required, Validators.pattern('[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12}')]);


  public readonly fields: FormGroup = new FormGroup({
    firstname: this.fieldFirstName,
    lastname: this.fieldLastName,
    patComment: this.fieldComment,
    identifier: this.fieldIdentifier,
    patientDoctorId: this.fieldpatientDoctorId,
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
    return "PANIC!!!"
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
    return "PANIC!!!"
  }

  public get commentErrors(): string | null {
    if (this.fieldComment.errors === null || this.fieldComment.errors === undefined) {
      return null;
    }
    if (this.fieldComment.errors['maxlength']) {
      return 'Maximal 200 Zeichen zugelassen';
    }
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

  public get patientDoctorIdErrors(): string | null {
    if (this.fieldpatientDoctorId.errors === null || this.fieldpatientDoctorId.errors === undefined) {
      return null;
    }
    if (this.fieldpatientDoctorId.errors["required"]) {
      return 'Pflichtfeld';
    }
    if (this.fieldpatientDoctorId.errors['pattern']) {
      return 'Gültige UUID angeben';
    }
    return "In einer Weit Weit entfernten Galaxis";
  }

   public get percentageCompletion(): number {
     let percentage: number = 0;
     percentage += this.fieldFirstName.valid ? 25 : 0;
     percentage += this.fieldLastName.valid ? 25 : 0;
     percentage += this.fieldIdentifier.valid ? 25 : 0;
     percentage += this.fieldpatientDoctorId.valid ? 25 : 0;
     return percentage;
   }

}
