import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation in angular';
 
  myFunction(a,b){
    alert("Summation of two number is "+ (a+b));
  }
}
