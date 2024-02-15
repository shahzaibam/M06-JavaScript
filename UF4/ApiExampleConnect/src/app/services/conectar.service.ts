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
    // return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {responseType:'json'});
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {'hero':'Marc'}, {responseType:'json'});
    // return this.http.delete('https://jsonplaceholder.typicode.com/posts/1', {responseType:'json'});

  }

  getUsers():Observable<any>{
    return this.http.get('https://reqres.in/api/users');
  }


  //pruebas angular-node express
  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:3000/api/select');
  }


  getSingleUserPassword(singleUser:string):Observable<any>{
    return this.http.post('http://localhost:3000/api/selectSingleUser', {singleUser});
  }

  getSingleUserPasswordByURL(singleUser:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/selectSingleUser'+singleUser);
  }


  createUser(username: string, userpass: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/create-user', { username, userpass });
  }

}
