import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginAtmComponent } from './components/login-atm/login-atm.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboarduserComponent } from './components/dashboarduser/dashboarduser.component';
import { DashboardatmComponent } from './components/dashboardatm/dashboardatm.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { ActivateuserComponent } from './components/activateuser/activateuser.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'home', component: LoginUserComponent },
  { path: 'loginatm', component: LoginAtmComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboarduser', component: DashboarduserComponent },
  { path: 'dashboardatm', component: DashboardatmComponent },
  { path: 'reset', component: ResetpassComponent },
  { path: 'reset/:token', component: ResetpassComponent },
  { path: 'activation/:token', component: ActivateuserComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
