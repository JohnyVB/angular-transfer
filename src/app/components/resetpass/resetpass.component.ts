import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public passErr: boolean;
  public pass1: string;
  public pass2: string;
  public spinner: boolean;
  public success: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) { 
    this.token = null;
    this.email = null;
    this.emailErr = false;
    this.emailOk = false;
    this.passErr = false
    this.pass1 = '';
    this.pass2 = '';
    this.spinner = false;
    this.success = false;
  }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(){
    this._route.params.subscribe(
      res => {
        this.token = res.token;
      }
    );
  }

  sendEmail(){
    this.spinner = true;
    this._authService.resetpass(this.email).subscribe(
      res => {
        this.emailOk = true;
        this.emailErr = false;
      },
      err => {
        this.emailErr = true;
        this.spinner = false;
      }
    )
  }

  sendPass(){
    if (this.pass1 === this.pass2) {
      this.spinner = true;
      this._authService.updatepass(this.token, this.pass2).subscribe(
        res => {
          this.passErr = false;
          this.spinner = false;
          this.success = true;
        },
        err => {
          this.passErr = true;
          this.spinner = false;
          this.success = false;
        }
      )
    }else{
      this.passErr = true;
    }
  }

}
