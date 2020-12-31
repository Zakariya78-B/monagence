import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('',[Validators.required,Validators.minLength(8)]),
    ville: new FormControl('',Validators.required),
    genre: new FormControl('1'),
    departement:new FormControl(0),
    hireDate: new FormControl(),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      ville: '',
      genre: '1',
      departement:0,
      hireDate: '',
      isPermanent: false
    });
  
  }
}
