import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() messageFromFather!:string;

  @Output() messageToFather = new EventEmitter<string>;

  constructor() {
  }

  sendToFather() {
    this.messageToFather.emit("Hola padre, soy tu hijo");
  }
}
