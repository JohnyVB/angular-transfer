import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;
  public token: string;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
    this.user = {} as User;
    this.token = '';
  }

  ngOnInit(): void {
    this.getToken();
  }

  singOff(){
    this._authService.deleteToken();
    this._router.navigate(['/home']);
  }

  //traer token de la cookie
  getToken(){
    this.token = this._authService.getToken();
    if (this.token) {
      this.getUser();
    }else{
      this._router.navigate(['/home']);
    }
  }

  //traer usuario por token
  getUser(){
    this._authService.getUser(this.token).subscribe(
      res => {
        this.user = res.user;
        this._authService.user = this.user;
        
      },
      error => {
        console.log(error);
        this._router.navigate(['/home']);
      }
    );
  }

}
