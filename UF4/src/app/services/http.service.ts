import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/User';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:3000';
  private usuariSubject: BehaviorSubject<any>;
  public usuario:Observable<any>;//part public del Behabiour Subject

  public usuariData():any{
    return this.usuariSubject.value;
  }

  constructor(private _http: HttpClient) {
   this.usuariSubject= new BehaviorSubject<any>(localStorage.getItem('myToken'));//estat inicial del BehaviorSubject
   this.usuario=this.usuariSubject.asObservable();////part public del Behabiour Subject que s'hi actualitza


  }



  getUsers():Observable<any>{
    return this._http.get(this.url+"/allUsers");
  }

  validateLogin(name: string,pass:string):Observable<any>{
    console.log("enviar ==> login");
    return this._http.post<any>(this.url+"/login", {"usuari":name,"contrasenya":pass}, {responseType: "json" }).pipe(
      map(res =>{
        console.log("Resposta del servidor");
        console.log(JSON.stringify(res));

        if(!res.error){
          //  const user:User=new User(res.data.dni ,res.data.role);
           console.log("Objecte Usuari");
           console.log(res.data);

          localStorage.setItem('myToken',res.data);


          this.usuariSubject.next(res.data);
        }
        return res;

      })
    );
  }



  logout(){
    localStorage.removeItem('myToken');

    this.usuariSubject.next(null);
  }
}
