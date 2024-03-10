import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Racing, the never Ending...";
  currentTitle = '';

  ngOnInit() {
    this.typeTitle();
  }

  typeTitle() {
    let index = 0;
    const intervalId = setInterval(() => {
      this.currentTitle += this.title[index];
      index++;
      if (index === this.title.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }
  contact: FormGroup;

  message!:string;

  constructor() {
    this.contact = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9 ]{6,}$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern('/^\d{8}[a-zA-Z]$/'),
      ]),
      mensaje: new FormControl('', [
        Validators.required,
        // Validators.pattern('/^\d{8}[a-zA-Z]$/'),
      ]),
    });

  }

  submit(){
    
  }
}
