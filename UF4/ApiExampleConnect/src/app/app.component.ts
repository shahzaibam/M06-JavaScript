import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appuf4';
  isLogged!:boolean;

  constructor(public _http:HttpService, private route: Router){
  }

  ngOnInit(): void {

    this._http.usuario.subscribe(
      resultat =>{
       if(resultat!=null){
          this.isLogged=true;
       } else{
         this.isLogged=false;
       }

      }
    )
  }




  logout(){
    this._http.logout();
    this.route.navigate(['/com1']);
  }
}
