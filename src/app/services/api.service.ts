import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }


  getPosts() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
