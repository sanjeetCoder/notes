import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('123')
  })
 
  get email(){
    return this.loginForm.get('email')
  }
}
