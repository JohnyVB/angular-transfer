import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public countries: [];
  public cities: [];
  public stateCreate: number;
  public emailErr: any;
  public documentErr: any;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService
  ) { 
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      typeDocument: ["", [Validators.required]],
      document: ["", [Validators.required]],
      dateBirth: ["", [Validators.required]],
      countryBirth: ["", [Validators.required]],
      cityBirth: ["", [Validators.required]],
      expeditionDate: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });

    this.countries = [];
    this.cities = [];
    this.stateCreate = 0; // 0: deshabilitado, 1: habilitado, 2: transaccion Ok
    this.emailErr = null;
    this.documentErr = null;
  }

  ngOnInit(): void {
    this.getCountries();
  }

  createUser(){
    this.stateCreate = 1;
    this.emailErr = document.querySelector('#emailErr');
    this.documentErr = document.querySelector('#documentErr');
    this._userService.createUser(this.registerForm.value).subscribe(
      res => {
        this.registerForm.reset();
        this.stateCreate = 2;
        this.documentErr.innerHTML = "";
        this.emailErr.innerHTML = "";
      },
      ({error}) => {
        error.errors.forEach((element: any) => {
          if (element.param === "document") {
            this.documentErr.innerHTML = element.msg;
          }else if (element.param === "email") {
            this.emailErr.innerHTML = element.msg;
          }
          console.log('Error al crear usuario: ', element);
        });
        this.stateCreate = 0;
      }
    );
  }

  getCountries(){
    this._userService.getCountryAll().subscribe(
      res => {
        this.countries = res.data.map((item: any) => {
          return { 
            name: item.country 
          }
        })
      },
      err => console.log('Error al traer los paises: ', err)
    );
  }

  getCity(){
    this._userService.getCityAll(this.registerForm.value.countryBirth).subscribe(      
      res => {
        this.cities = res.data.map((item: any) => {
          return {
            name: item.city
          }
        });
      },
      err => console.log('Error al traer las ciudades: ', err)
    );
  }

}
