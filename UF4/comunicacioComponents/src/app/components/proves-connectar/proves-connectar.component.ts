import { Component, OnInit } from '@angular/core';
import { ConnectarService } from '../../services/connectar.service';

@Component({
  selector: 'app-proves-connectar',
  templateUrl: './proves-connectar.component.html',
  styleUrls: ['./proves-connectar.component.css']
})


export class ProvesConnectarComponent implements OnInit{

  posts!:any[];
  users!:any[];

  constructor(private connectar: ConnectarService){

  }


  ngOnInit(){
    // this.connectar.getPosts().subscribe(
    //   (result)=>{
    //    // console.log(result);//lo que viene directament del servidor
    //     this.posts=result;//recojo para mostrarlo en el html
    //     console.log(this.posts);
    //   }
    // );
    // this.connectar.getUsers().subscribe(
    //   (result)=>{
    //     console.log(result.data);
    //     this.users=result.data;//recojo solo el array
    //   }



    //)


  }
  getUsers(){
//recoja todos los usuarios de la BBDD
  }
}
