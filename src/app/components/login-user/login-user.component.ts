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
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.loading = true;
    this._authService.loginUser(this.dataLogin).subscribe(
      res => {
        this._authService.setToken(res.token);
        this._router.navigate(['/dashboarduser']);
        console.log('Respuesta: ', res); 
      },
      err => {
        this.loginErr = true;
        this.loading = false;
      }
    );
  }

}
