import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  loginForm=new FormGroup({
    username:new FormControl('anil'),
    password:new FormControl('123')
  })
  collectedData(){
    console.warn(this.loginForm.value); 
  }
}
