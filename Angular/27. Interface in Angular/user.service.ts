import { Injectable } from '@angular/core';
interface userType{
  name:string,
  email:String,
  phone:number,
  // isEligible:int     #It will gve error coz isEligible is boolean type
  isEligible:boolean

}

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
