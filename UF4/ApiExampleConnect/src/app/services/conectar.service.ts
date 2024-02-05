import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  constructor(private http:HttpClient) { }

  //metodes que retornern valors que veneen d'una API
  getPosts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers():Observable<any>{
    return this.http.get('https://reqres.in/api/users');
  }
}
