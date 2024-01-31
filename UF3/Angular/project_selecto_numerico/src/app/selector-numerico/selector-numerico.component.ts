import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {
  @Input() minimo!: number;
  @Input() maximo!: number;
  actual!: number;

  constructor() { }

  ngOnInit() {
    // En el momento de la inicialización, el valor actual se establece en el valor mínimo proporcionado.
    this.actual = this.minimo;
  }

  incrementar(): void {
    // Incrementa el valor actual si no supera el valor máximo.
    if (this.actual < this.maximo)
      this.actual++;
  }

  decrementar(): void {
    // Decrementa el valor actual si no es menor que el valor mínimo.
    if (this.actual > this.minimo)
      this.actual--;

  }

  fijar (v: number): void {
    // Fija el valor actual solo si está dentro del rango permitido.
    if ((v >= this.minimo) && (v <= this.maximo))
      this.actual = v;

  }

}
