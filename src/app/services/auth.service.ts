import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
import { CookieService } from "ngx-cookie-service";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  public user: User;

  constructor(
    private _http: HttpClient,
    private cookie: CookieService
  ) {
    this.url = environment.urlApi;
    this.user = {} as User;
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

  activateUser(token: string): Observable<any>{
    return this._http.post(this.url + 'auth/activation', { token });
  }

  getUser(token: string): Observable<any>{
    return this._http.post(this.url + 'auth/getadmin', { token });
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

  setCredentialsUSER(data: {}){
    this.cookie.set('dataTransferUSER', JSON.stringify(data));
  }

  getCredentialsUSER(){
    return this.cookie.get('dataTransferUSER');
  }

  deleteCredentialsUSER(){
    this.cookie.delete('dataTransferUSER');
  }

  setCredentialsATM(data: {}){
    this.cookie.set('dataTransferATM', JSON.stringify(data));
  }

  getCredentialsATM(){
    return this.cookie.get('dataTransferATM');
  }

  deleteCredentialsATM(){
    this.cookie.delete('dataTransferATM');
  }

  deleteAllCookies(){
    this.cookie.deleteAll();
  }
}