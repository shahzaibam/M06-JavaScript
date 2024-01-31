import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  usuarios!: User[];
  flag!:boolean;
  user!:User;
  constructor(private usuarioService: UsuariosService){

  }
  ngOnInit(){

    //recojo todos los usuarios del servicio
    this.usuarios=this.usuarioService.getUsers();
    //console.log(this.usuarios);
    this.flag=false;
    this.user=new User("","");
  }

  getOne(u:User){
    this.user=u;

    this.flag=true;

  }
  update(u:User){
    //recollo l'usuari que vé des de l'edit gràcies a @Output

    if(u!=undefined){//si rebo alguna cosa
      this.flag=false;//amago de nou el formulari de sota del llistat
      this.usuarios.map(function(us){ //amb map busco el valor modificat i rectifico els nous valors
        if(us.nomUsuari== u.nomUsuari){
          us.correuElectronic = u.correuElectronic;
          us.estatCivil=u.estatCivil,
          us.sexe=u.sexe
        }

        return us;
      });
      console.log(this.usuarios)
    }

  }
}
