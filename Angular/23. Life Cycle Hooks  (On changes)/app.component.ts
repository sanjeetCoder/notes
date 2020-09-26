import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data="sanjeet"
update(){
  this.data="hi sanjeet........"
}
}
