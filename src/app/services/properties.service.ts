import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties = [
    {
      title: 'Ma super maison',
      category: 'Maison',
      sold: true,
      price:'350 000'

    },
    {
      title: 'Mon petit appartement',
      category: 'Appartement',
      surface:'78',
      sold: false

    },
    {
      title: 'Ma belle villa',
      category: 'Maison',
      sold: false

    }

  ];
  propertiesSubject = new Subject<any[]>();

  constructor() { }
  emitProperties(){
    this.propertiesSubject.next(this.properties);
  }

  getProperties(){}

  createProperty(property:any){
    this.properties.push(property);
  }
}
