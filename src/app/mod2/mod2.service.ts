import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
const userJSON = require('../../assets/user.json');

@Injectable({
  providedIn: 'root',
})
export class Mod2Service {
  userJson = userJSON;
  user;
  posts;
  post;

  constructor(private httpclient: HttpClient) {}

  loadUser(): void {
    this.httpclient.get('assets/user.json').subscribe((data)=>this.user=data)
  }

  getPosts() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts'); //здесь без subscribe но зато с пайпом async в шаблоне
  }

  postPosts() {
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1
    }).pipe(map(data=>{
      console.log(data);
      return data
    }));
  }
  loadPosts(){
    //this.posts=this.getPosts();
    this.posts=this.getPosts()
  }
  loadPost(){
    //this.posts=this.getPosts();
    this.post=this.postPosts()
  }
  


}

