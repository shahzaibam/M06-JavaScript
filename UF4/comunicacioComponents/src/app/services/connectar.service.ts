import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectarService {

  constructor(private http:HttpClient) { }

  //mètodes que retornen valors que venen d'una API
  getPosts():Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts/1',{responseType:'json'});

     // return this.http.post('https://jsonplaceholder.typicode.com/posts',{'hero':'Marc'},{responseType:'json'});
     //return this.http.delete('https://jsonplaceholder.typicode.com/posts/1',{responseType:'json'});
  }

  getUsers():Observable<any>{

    return this.http.get('https://reqres.in/api/users?page=2');

  }

}
