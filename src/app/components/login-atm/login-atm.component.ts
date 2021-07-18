import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-atm',
  templateUrl: './login-atm.component.html',
  styleUrls: ['./login-atm.component.scss']
})
export class LoginAtmComponent implements OnInit {

  public dataLogin: any;
  public loginErr: boolean;
  public loading: boolean;
  public rememberMe: any;
  public credentials: any;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
    this.dataLogin = {
      document: '',
      password: ''
    };
    this.loginErr = false;
    this.loading = false;
    this.rememberMe = (this._authService.getCredentialsATM()) ? true : false;
    this.credentials = null;
  }

  ngOnInit(): void {
    this.getDataTransfer();
  }

  getDataTransfer(){
    this.credentials = this._authService.getCredentialsATM();
        
    if (this.credentials) {
      this.dataLogin.document = JSON.parse(this.credentials).document;
      this.dataLogin.password = JSON.parse(this.credentials).password;
    }
  }

  loginAtm(){
    this.loading = true
    this._authService.loginAtm(this.dataLogin).subscribe(
      res => {

        this._authService.setToken(res.token);
        this._authService.user = res.user;
        
        if (this.rememberMe && !this.credentials) {
          this._authService.setCredentialsATM(this.dataLogin);
        }else if (!this.rememberMe) {
          this._authService.deleteCredentialsATM();
        }
        this._router.navigate(['/dashboardatm/' + res.token]); 
      },
      err => {
        this.loginErr = true;
        this.loading = false;
      }
    );
  }

}
