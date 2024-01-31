import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tareas',
  templateUrl: './add-tareas.component.html',
  styleUrls: ['./add-tareas.component.css']
})


/**
 * AQUI SE ESTA UTILIZANDO EL METODO HIJO A PADRE, ADDTAREASCOMPONENT ES EL HIJO Y ENVIA DATOS AL PADRE QUE ES TAREASCOMPONENT
 */
export class AddTareasComponent implements OnInit {
  newTarea!:string; // --> Definimos una variable newTarea para almacenar la nueva tarea ingresada por el usuario.
  @Output() tareaAgregada = new EventEmitter<string>(); // --> Creamos un EventEmitter llamado tareaAgregada para emitir la nueva tarea al componente padre.


  constructor(private router: Router) {}

  ngOnInit(): void {}


  //Implementamos el método onSubmit() para emitir la nueva tarea
  // a través de tareaAgregada cuando se hace clic en el botón "Add Task" y limpiar el campo de entrada.
  onSubmit() {
    this.tareaAgregada.emit(this.newTarea);
    this.newTarea = '';
  }
}
