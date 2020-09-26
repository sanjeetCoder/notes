import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation in angular';

  passingKey(val){
    console.log(val.target.value);
    console.log(val.target.name);

  }

}
