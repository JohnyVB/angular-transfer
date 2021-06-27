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
  }

  ngOnInit(): void {
  }

  loginAtm(){
    this.loading = true
    this._authService.loginAtm(this.dataLogin).subscribe(
      res => {
        this._authService.setToken(res.token);
        this._router.navigate(['/dashboardatm']);
        console.log('Respuesta: ', res); 
      },
      err => {
        this.loginErr = true;
        this.loading = false;
      }
    );
  }

}
