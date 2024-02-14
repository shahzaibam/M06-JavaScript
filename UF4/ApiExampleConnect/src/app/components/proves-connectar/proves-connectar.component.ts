import {Component, OnInit} from '@angular/core';
import {ConectarService} from "../../services/conectar.service";

@Component({
  selector: 'app-proves-connectar',
  templateUrl: './proves-connectar.component.html',
  styleUrls: ['./proves-connectar.component.css']
})
export class ProvesConnectarComponent implements OnInit{

  posts!:any[];
  data!:any[];
  users!:any[];
  constructor(private connectar: ConectarService) {
  }

  ngOnInit(): void {
    // this.connectar.getPosts().subscribe(
    //   (result) => {
    //     console.log(result);
    //
    //     this.posts = result;
    //
    //     console.log(this.posts);
    //
    //   }
    // );
    //
    //
    // this.connectar.getUsers().subscribe(
    //   (result) => {
    //     console.log(result);
    //
    //     this.data = result.data;
    //
    //
    //     console.log(this.data);
    //
    //   }
    // );





  }

  getAllUsers() {
    this.connectar.getAllUsers().subscribe(
      (result) => {
        console.log(result); // Verifica la estructura de result
        this.users = result.results; // Asumiendo que result es el objeto completo
      }
    );
  }


}
