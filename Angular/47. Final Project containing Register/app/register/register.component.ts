import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup  } from "@angular/forms";
import { RestoService } from "../resto.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false
  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collection(){
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result)=>{
      console.warn(result);
      this.alert=true
      
    })
    
  }
  closeAlert(){
    this.alert=false
  }

}
