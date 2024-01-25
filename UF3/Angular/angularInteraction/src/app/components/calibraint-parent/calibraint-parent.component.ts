import { Component } from '@angular/core';

@Component({
  selector: 'app-calibraint-parent',
  templateUrl: './calibraint-parent.component.html',
  styleUrls: ['./calibraint-parent.component.css']
})
export class CalibraintParentComponent {

  parentMessage = "soy tu padre";
  username = "shebi";
  password = "123";
  message:string = "";

  constructor() {
  }


  receiveMessage(event:any) {
    this.message = event;

    console.log("el mensaje del hijo es --> " + this.message)
  }
}
