import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{


  name!:string;
  password!:string;

  control = new FormControl('');

  register!:FormGroup;
  option!: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.register = new FormGroup({
      //name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]), --> patron que incluye letras minuscula y mayus
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]), //--> conte lletres i/o números, mínim de 5 caràcters i un màxim de 8.
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]), //--> patron para email
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      option: new FormControl('', [Validators.required])
    })

    this.option = ['Si', 'No', 'No se']; //los que son checkboxes hay que definirlos antes de usarlos tambien

  }

  printName() {
    console.log(this.register.get('name')?.value);
    console.log(this.register.get('password')?.value);
    console.log(this.register.get('email')?.value);
    console.log(this.register.get('option')?.value);
  }


}
