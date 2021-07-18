import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboardatm',
  templateUrl: './dashboardatm.component.html',
  styleUrls: ['./dashboardatm.component.scss']
})
export class DashboardatmComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    this._route.params.subscribe(
      res => {
        this.getUserLogged(res.token);
      },
      err => {
        this._authService.deleteAllCookies();
        this._router.navigate(['/home']);
      }
    );
  }

  getUserLogged(token: string) {

    this._authService.getUser(token).subscribe(
      res => {
        this._authService.user = res.user;
      },
      err => {

        this._authService.deleteAllCookies();
        this._router.navigate(['/home']);

      }
    );

  }


}
