import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  todoLists: string[] = ['Complete Homework', 'Buy groceries', 'Go for a run']; // --> Creamos un arreglo todoLists para almacenar todas las tareas.

  constructor() {}

  ngOnInit() {}


  //Implementamos el método agregarTarea(tarea: string)
  // para agregar la nueva tarea recibida al arreglo todoLists.
  agregarTarea(tarea: string) {
    console.log("Nueva tarea añadida:", tarea);
    this.todoLists.push(tarea);
  }
}
