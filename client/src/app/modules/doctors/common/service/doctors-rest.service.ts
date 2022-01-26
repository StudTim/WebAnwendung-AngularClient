import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IDoctorModel } from '../model/i-doctor-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsRestService {

  public items: IDoctorModel[] = [];

  constructor(private http: HttpClient) { }

  public all(): Observable<IDoctorModel[]> {

    return this.http.get<IDoctorModel[]>("/api/v1/doctors")
      .pipe(tap((items) => {
        this.items = items;
      }));

  }

  public create(model: IDoctorModel): Observable<IDoctorModel> {
    console.log('Postring', model, 'to /api/v1/doctors')
    return this.http.post<IDoctorModel>("/api/v1/doctors/", model)
      .pipe(tap((result: IDoctorModel) => {
        this.items.push(result);
      }));

  }

  public delete(id: string): Promise<void> {

    return this.http.delete<void>(`/api/v1/doctors/${id}`)
      .pipe(catchError(this.handleError))
      .toPromise()
      .then(() => null);

  }

  public find(id: string): Observable<IDoctorModel> {

    return this.http.get<IDoctorModel>(`/api/v1/doctors/${id}`);

  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'Doktor Löschen Fehler';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Das sind nicht die Droiden die ihr sucht`;
    } else {
      errorMessage = `Löschen Fehlgeschlagen. \nDer Doktor enthält noch zugewiesene Patienten`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
