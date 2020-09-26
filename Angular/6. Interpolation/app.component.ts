import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation in angular';
  public a=20;
  public b=30;

  object={
    name:"Sanjeet",
    email:"sanjeet@gmail.com"
  }

  arrayList=[10,20,30,40]
}
