import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service';

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
  propertiesSubscription = new Subscription;
  properties:any[] = [];

  constructor(private formBuilder: FormBuilder,private propertiesService:PropertiesService) { 
    
  }

  ngOnInit(): void {
    this.initPropertiesForm()
    this.propertiesService.propertiesSubject.subscribe(
      (data) =>{
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
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
    const newProperty = this.propertiesForm.value;
    this.propertiesService.createProperty(newProperty);
    console.log(this.properties)
  
  }

}
