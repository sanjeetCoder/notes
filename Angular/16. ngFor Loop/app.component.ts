import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  colors=['red','green','yellow','orange']
  
  intros=[
    {name:"sanjeet",email:"sanjeet.star786@gmail.com"},
    {name:"ranjeet",email:"ranjeet.star786@gmail.com"},
    {name:"manjee",email:"manjeet.star786@gmail.com"}

  ]
}
