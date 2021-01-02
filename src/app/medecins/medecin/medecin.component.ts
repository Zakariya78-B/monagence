import { Component, OnInit } from '@angular/core';
import  { MedecinService } from '../shared/medecin.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  constructor(public mserv: MedecinService) { }

  departements = [
    {id:1, value:'Dep 1'},
    {id:2, value:'Dep 2'},
    {id:3, value:'Dep 3'}
  ];

  ngOnInit(): void {
  }

  onClear(){
    this.mserv.form.reset();
    this.mserv.initializeFormGroup();
  }
}
