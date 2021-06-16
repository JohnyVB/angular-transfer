import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent implements OnInit {

  public token: any;
  public email: any;
  public emailErr: boolean;
  public emailOk: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) { 
    this.token = null;
    this.email = null;
    this.emailErr = false;
    this.emailOk = false;
  }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(){
    this._route.params.subscribe(
      res => {
        this.token = res.token;
        console.log(this.token);
      }
    );
  }

  sendEmail(){
    this._authService.resetpass(this.email).subscribe(
      res => {
        this.emailOk = true;
        this.emailErr = false;
      },
      err => {
        this.emailErr = true;
      }
    )
  }

}
