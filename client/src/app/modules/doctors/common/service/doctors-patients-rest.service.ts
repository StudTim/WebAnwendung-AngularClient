import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPatientModel } from '../../../patients/common/model/i-patient-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsPatientsRestService {

  public items: IPatientModel[] = [];

  constructor(private http: HttpClient) { }

  public all(idDoctor: string): Observable<IPatientModel[]> {

    return this.http
      .get<IPatientModel[]>(`/api/v1/doctors/${idDoctor}/patients`)
      .pipe(tap((items) => {
        this.items = items;
      })
      );

  }

  public hasPatients(idDoctor: string): boolean {



    return true;
  }
}
