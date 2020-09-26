import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tutInfo;
  constructor(private formBuild: FormBuilder){
    this.tutInfo=this.formBuild.group({
      user:'',
      address:''
    })

  }
  onSubmit(values){
    console.warn('form submit' ,values)
  }

}
