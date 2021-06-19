import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.scss']
})
export class ActivateuserComponent implements OnInit {

  public activationOk: number;

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) { 
    this.activationOk = 0;
  }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(){
    this._route.params.subscribe(
      res => {        
        this.sendActivation(res.token)
      },
      err => console.log(err)
    );
  }

  sendActivation(token: string){
    this._authService.activateUser(token).subscribe(
      res => this.activationOk = 1,
      err => {
        this.activationOk = 2;
        console.log(err);
      }
    );
  }

}
