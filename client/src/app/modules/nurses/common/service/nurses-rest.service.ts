import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INurseModel } from '../model/i-nurse-model';

@Injectable({
  providedIn: 'root'
})
export class NursesRestService {

  public items: INurseModel[] = [];

  constructor(private http: HttpClient) { }

  public all(): Observable<INurseModel[]> {
    return this.http.get<INurseModel[]>("/api/v1/nurses")
      .pipe(tap((items) => {
        this.items = items;
      }));

  }

  public create(model: INurseModel): Observable<INurseModel> {
    console.log('Postring', model, 'to /api/v1/nurses')
    return this.http.post<INurseModel>("/api/v1/nurses/", model)
      .pipe(tap((result: INurseModel) => {
        this.items.push(result);
      }));

  }

  public delete(id: string): Observable<void> {

    return this.http.delete<void>(`/api/v1/nurses/${id}`);

  }

  public find(id: string): Observable<INurseModel> {

    return this.http.get<INurseModel>(`/api/v1/nurses/${id}`);

  }
}
