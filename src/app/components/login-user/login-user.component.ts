import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

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
      email: '',
      password: ''
    };

    this.loginErr = false;
    this.loading = false;
    this.rememberMe = (this._authService.getCredentialsUSER()) ? true : false;
    this.credentials = null;
  }

  ngOnInit(): void {
    this.getDataTransfer();
  }

  getDataTransfer(){
    this.credentials = this._authService.getCredentialsUSER();

    if (this.credentials) {
      this.dataLogin.email = JSON.parse(this.credentials).email;
      this.dataLogin.password = JSON.parse(this.credentials).password;
    }
  }

  loginUser(){
    this.loading = true;
    this._authService.loginUser(this.dataLogin).subscribe(
      res => {
        this._authService.setToken(res.token);
        if (this.rememberMe && !this.credentials) {
          this._authService.setCredentialsUSER(this.dataLogin);
        }else if (!this.rememberMe) {
          this._authService.deleteCredentialsUSER();
        }
        this._router.navigate(['/dashboarduser/' + res.token]);
      },
      err => {
        this.loginErr = true;
        this.loading = false;
      }
    );
  }

}
