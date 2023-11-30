import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  formRegistro = new FormGroup({
    nombre: new FormControl("Zara", Validators.required),
    edad: new FormControl("23")
  })


  submit() {

  }

}
