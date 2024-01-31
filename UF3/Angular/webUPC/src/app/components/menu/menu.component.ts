import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = "Escribiendo en vivo";
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
    }, 100); // ajusta la velocidad de escritura aquí (en milisegundos)
  }
}
