import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  properties = [{title: '',
                category: '',
                  sold: true}
];
  propertiesSubscription = new Subscription;
  
  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.propertiesSubscription=this.propertiesService.propertiesSubject.subscribe(
      (data:any)=>{
        this.properties=data;
      }    
    );
    this.propertiesService.emitProperties();
  }
  getSoldValue(index:any){
      if(this.properties[index].sold){
        return 'red';
      }else{
        return 'green';
      }
    }
    ngOnDestroy(){
      this.propertiesSubscription.unsubscribe();
    }
}
