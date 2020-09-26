import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getPostData(){
    return this.http.get(this.url)
  }
}
