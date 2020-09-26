import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup  } from "@angular/forms";
import { RestoService } from "../resto.service";
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  constructor(private resto:RestoService) { }
  alert:boolean=false

  ngOnInit(): void {
  }

  collectResto(){
    // console.log(this.addResto.value)
    this.resto.saveResto(this.addResto.value).subscribe((data)=>{
      // console.warn(data)
      this.alert=true
    })
    this.addResto.reset({})
  }

    closeAlert(){
      this.alert=false
    }
 
}
