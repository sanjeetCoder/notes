import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name="sanjana"
  message="hi, this is sanjeet here"
  fullName="Sanjeet Kumar"
  birthday=new Date(1995,3,3)
}
