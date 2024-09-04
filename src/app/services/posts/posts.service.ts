import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post{
  id:number;
  userId:number;
  title:string;
  body:string;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  post?: string;

  constructor(private http: HttpClient) { }

  changePost(post: string): void {
    this.post = post;
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  
  createPost(post: Post): Observable<Post> {
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this.http.post<Post>(this.url, post);
  }
  
  updatePost(post: Post): Observable<Post> {
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this.http.put<Post>(`${this.url}/${post.id}`, post);
  }

  deletePost(post:Post): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${post.id}`);
  }
  
}