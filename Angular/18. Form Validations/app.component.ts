import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tutInfo;
  constructor(private formBuild: FormBuilder){
    this.tutInfo=this.formBuild.group({
      user:['',[Validators.required,Validators.minLength(6)]],
      address:['',[Validators.required,Validators.minLength(10)]]
    })

  }
  onSubmit(values){
    if(this.tutInfo.status=='INVALID'){
    alert("Inputs are not valid");
  }
  else
  {
    console.warn('form submit' ,values)

  }
}

  get user(){return this.tutInfo.get('user')}
  get address(){return this.tutInfo.get('address')}

}
