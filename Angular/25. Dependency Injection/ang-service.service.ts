import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngServiceService {

  constructor() { }
  callMockApi(){
    console.warn('callMockApi is called');
  }
}
