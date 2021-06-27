import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginAtmComponent } from './components/login-atm/login-atm.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboarduserComponent } from './components/dashboarduser/dashboarduser.component';
import { DashboardatmComponent } from './components/dashboardatm/dashboardatm.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { ActivateuserComponent } from './components/activateuser/activateuser.component';
import { HeaderatmComponent } from './components/headeratm/headeratm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginAtmComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ErrorComponent,
    DashboarduserComponent,
    DashboardatmComponent,
    ResetpassComponent,
    ActivateuserComponent,
    HeaderatmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
