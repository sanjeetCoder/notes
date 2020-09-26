import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngServiceService {

  constructor() { }
  printCase(item){
    console.warn("Service has been warned" , item);
  }
}
