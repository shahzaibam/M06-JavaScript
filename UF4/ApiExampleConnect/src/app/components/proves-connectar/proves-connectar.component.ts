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
  singleUser!:any[];

  username!:string;
  userpass!:string;


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


  getSingleUserPassword() {
    this.connectar.getSingleUserPassword().subscribe(
      (result) => {
        console.log(result); // Verifica la estructura de result
        this.singleUser = result.results; // Asumiendo que result es el objeto completo
      }
    );
  }



  createUser() {
    if (this.username && this.userpass) {
      this.connectar.createUser(this.username, this.userpass).subscribe(
        (result) => {
          console.log(result); // Maneja la respuesta del servidor
          // Realiza cualquier acción adicional según sea necesario
          this.username = ''; // Limpia los campos del formulario
          this.userpass = '';
        },
        (error) => {
          console.error(error); // Maneja los errores
        }
      );
    } else {
      console.error('Username and userpass are required');
    }
  }



}
