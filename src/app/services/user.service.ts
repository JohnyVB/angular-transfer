import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.urlApi;
  }

  createUser(user: any): Observable<any>{
    return this._http.post(this.url + 'users', user);
  }

  getCountryAll(): Observable<any>{

    const body = {
      order: "asc",
      orderBy: "name"
    }

    return this._http.post(`https://countriesnow.space/api/v0.1/countries/population/filter`, body);
  }

  getCityAll(country: string): Observable<any>{

    const body = {
      order: "asc",
      orderBy: "name",
      country: country
    }

    console.log('value: ', country);
    return this._http.post(`https://countriesnow.space/api/v0.1/countries/population/cities/filter`, body);
  }

}
