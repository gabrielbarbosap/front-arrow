import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  url = environment.url;
  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    return this.http.get<any>(this.url + '')
  }

  getId(id): Observable<any> {
    return this.http.get<any>(this.url + `${id}`)
  }

  putLevel(data): Observable<any> {
    return this.http.put<any>(this.url + 'level', data)
  }

  putObs(data): Observable<any> {
    return this.http.put<any>(this.url + 'obs', data)
  }

  putProv(data): Observable<any> {
    return this.http.put<any>(this.url + 'prov', data)
  }
}
