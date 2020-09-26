import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiUrl='https://jsonplaceholder.typicode.com/users' ;
  apiData;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.warn(data);  // It shows lists of data
      this.apiData=data;
    })
  }

}
