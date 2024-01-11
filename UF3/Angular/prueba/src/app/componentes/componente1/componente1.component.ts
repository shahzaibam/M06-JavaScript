import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User.model";
import {CookieService} from "ngx-cookie-service";
import {MyFirstServiceService} from "../../services/my-first-service.service";


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{
  //atributos de la clase (atributos públicos)

  //el simbolo ! es porque inicializo fuera del constructor es decir en OnInit
  //si inicializo en el constructor no necesito !
  nombre!:string;
  edad!:number;
  frutas!:string[];//arrays
  arboles!:Array<string>;//arrays
  flag!:boolean;
  user!:User;
  misFrutas!:string[];


  //a partir de ahora usaremos l constructor
  //para llamar (=inyectar) a cookies, servicios....
  constructor(private cookie: CookieService, private fruitesService: MyFirstServiceService) {

  }


  //metodo que cambia el orden de carga para usarlo viene asociado a implements OnInit
  ngOnInit(): void {
    this.nombre = "Sara M";
    this.edad = 20;
    this.frutas=["pera","manzana"];
    this.arboles=["peral","manzano"];
    this.flag = true;
    this.user = new User(this.nombre,this.edad);
    this.setCookie();
    this.misFrutas = this.fruitesService.createFruites();
    console.log(this.misFrutas);
  }



  setCookie():void {
    //creando una cookie de nombre clase, cuyo valor es DAW2
    this.cookie.set("clase", "DAW2");
    this.cookie.set("mes", "Enero");
  }


  deleteSpecCookie():void {
    this.cookie.delete("mes");
  }

  deleteAllCookies():void {
    this.cookie.deleteAll();
  }

//método de la clase

  saludo(){
    alert("Hola");
  }


}
