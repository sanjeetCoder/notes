import { Component } from '@angular/core';
import {PostService} from './post.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private post:PostService){}
  posts={}
  ngOnInit(){
    this.post.getPostData().subscribe((resp)=>{
      // console.warn(resp);
      this.posts=resp
    })
  }
}
