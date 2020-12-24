import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  
  propertiesForm= new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      surface: new FormControl(''),
      rooms: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,) { 
    
  }

  ngOnInit(): void {
    this.initPropertiesForm()
  } 

   initPropertiesForm(){
    this.propertiesForm = this.formBuilder.group({
      title:['', Validators.required],
      category:['', Validators.required],
      surface:['', Validators.required],
      rooms:['', Validators.required],
      description:'',
      price:['', Validators.required]
    });
  }

  onSubmitPropertiesForm(){
    console.log(this.propertiesForm.value);
   
  }

}
