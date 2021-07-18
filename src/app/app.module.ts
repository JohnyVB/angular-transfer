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
import { DashboardatmComponent } from './components/dashboardatm/dashboardatm.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { ActivateuserComponent } from './components/activateuser/activateuser.component';
import { HeaderatmComponent } from './components/headeratm/headeratm.component';
import { AsideComponent } from './components/aside/aside.component';
import { OrderComponent } from './components/order/order.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RechargesComponent } from './components/recharges/recharges.component';
import { CashboxComponent } from './components/cashbox/cashbox.component';
import { UseractivationComponent } from './components/useractivation/useractivation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginAtmComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ErrorComponent,
    DashboardatmComponent,
    ResetpassComponent,
    ActivateuserComponent,
    HeaderatmComponent,
    AsideComponent,
    OrderComponent,
    TransferComponent,
    PaymentsComponent,
    RechargesComponent,
    CashboxComponent,
    UseractivationComponent
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
