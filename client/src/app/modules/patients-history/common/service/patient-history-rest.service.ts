import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientHistoryModel } from '../model/i-patient-history-model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryRestService {

  public items: IPatientHistoryModel[] = [];

  constructor(private http: HttpClient) { }

  public all(idPatient: string): Observable<IPatientHistoryModel[]> {

    return this.http
      .get<IPatientHistoryModel[]>(`/api/v1/patients/${idPatient}/histories`)
      .pipe(tap((items) => {
        this.items = items;
      })
    );

  }

  public create(idPatient: string, model: IPatientHistoryModel): Observable<IPatientHistoryModel> {

    return this.http.post<IPatientHistoryModel>(`/api/v1/patients/${idPatient}/histories`, model);

  }

  public delete(idPatient: string, id: string): Promise<void> {

    return this.http.delete<void>(`/api/v1/patients/${idPatient}/histories/${id}`)
      .toPromise()
      .then(() => null);

  }

  public find(idPatient: string, id: string): Observable<IPatientHistoryModel> {

    return this.http.get<IPatientHistoryModel>(`/api/v1/patients/${idPatient}/histories/${id}`);

  }
}
