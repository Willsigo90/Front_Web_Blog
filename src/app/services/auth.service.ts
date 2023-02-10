import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<string> {
    return this.http.post('https://localhost:44381/api/login', user, {
      responseType: 'text',
    });
  }

  public getMe(): Observable<string> {
    return this.http.get('https://localhost:44381/api/post/PublishedPost', {
      responseType: 'text',
    });
  }

  

  public GetUserRol(): Observable<string> {
    return this.http.get('https://localhost:44381/api/login/GetUser', {
      responseType: 'text',
    });
  }

  public getCommentsById(postId: number): Observable<string> {
    return this.http.get('https://localhost:44381/api/Comment/CommentsByPost?postId='+ `${postId}`, {
      responseType: 'text',
    });
  }

  public getPublishedPost(): Observable<string> {
    return this.http.get('https://localhost:44381/api/post/PublishedPost', {
      responseType: 'text',
    });
  }

  // public getComentariosByPost(postId:number):Observable<any[]> {
  //   return this.http.get<any>('https://localhost:44381/api/Comment/CommentsByPost'+ `/${postId}`);
    
  // }
}
