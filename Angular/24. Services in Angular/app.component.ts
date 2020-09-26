import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { FormGroup, FormControl} from '@angular/forms';
import {AngServiceService} from './ang-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    let t1=new AngServiceService
    t1.printCase("service component")
  }
}
