import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientModel } from '../model/i-patient-model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientRestService {

  public items: IPatientModel[] = [];

  constructor(private http: HttpClient) { }

  public all(): Observable<IPatientModel[]> {

    return this.http.get<IPatientModel[]>("/api/v1/patients")
      .pipe(tap((items) => {
        this.items = items;
      }));

  }

  public create(model: IPatientModel): Observable<IPatientModel> {
    console.log('Postring', model, 'to /api/v1/patients')
    return this.http.post<IPatientModel>("/api/v1/patients/", model)
      .pipe(tap((result: IPatientModel) => {
        this.items.push(result);
      }));

  }

  public delete(id: string): Promise<void> {

    return this.http.delete<void>(`/api/v1/patients/${id}`)
      .toPromise()
      .then(() => null);

  }

  public find(id: string): Observable<IPatientModel> {

    return this.http.get<IPatientModel>(`/api/v1/patients/${id}`);
    
  }
}


