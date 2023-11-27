import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  //atributos de la clase: son publicos (no tienen #)
  customer:string = "Maria"; //este atributo es una cadena TypeScript
  age:number = 21;
  id=12121212; //identificador
}
