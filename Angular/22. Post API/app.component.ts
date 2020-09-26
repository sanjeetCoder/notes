import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url="http://localhost:5000/api/user/register"
  restofForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmpwd:new FormControl('')
  })

  constructor(private httpClient:HttpClient){
 }
 callApi(){
    console.warn(this.restofForm.value)
    this.httpClient.post(this.url,this.restofForm.value).subscribe((data:any[])=>{
      console.log(data);
    })
  }
}
