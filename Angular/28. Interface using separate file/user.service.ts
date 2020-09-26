import { Injectable } from '@angular/core';
import {userType} from './userType'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsersData(){
    const data:userType[]=[
      {
        name:"sanjeetCoder",
        email:"sanjeetcoders@gmail.com",
        phone:9877181062,
        isEligible:true
      }
    ]
    return data
  }
}
