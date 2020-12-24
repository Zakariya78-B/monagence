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
      sold: true

    },
    {
      title: 'Mon petit appartement',
      category: 'Appartement',
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
}
