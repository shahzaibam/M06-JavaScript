import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calibraint-child',
  templateUrl: './calibraint-child.component.html',
  styleUrls: ['./calibraint-child.component.css']
})
export class CalibraintChildComponent implements OnInit{
  @Input() childMessage: string="";
  message:string = "Soy el Hijo";
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {


  }
  ngOnInit(){
    console.log("eoeoeoeo");
    console.log(this.childMessage);
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }


}
