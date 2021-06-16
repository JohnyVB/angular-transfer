import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string;

  constructor(
    private _http: HttpClient,
    private cookie: CookieService
  ) {
    this.url = environment.urlApi;
  }

  loginUser(dataLogin: any): Observable<any>{
    return this._http.post(this.url + 'auth/loginuser', dataLogin);
  }

  loginAtm(dataLogin: any): Observable<any>{
    return this._http.post(this.url + 'auth/loginatm', dataLogin);
  }

  resetpass(email: any): Observable<any>{
    return this._http.post(this.url + 'auth/resetpass', { email });
  }

  updatepass(token: string, password: string): Observable<any>{
    return this._http.put(this.url + 'auth/updatepass', { token, password });
  }

  setToken(token: string){
    this.cookie.set("token-transfer", token);
  }

  getToken(){
    return this.cookie.get("token-transfer");
  }

  deleteToken(){
    this.cookie.delete("token-transfer");
  }
}