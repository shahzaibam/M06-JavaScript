import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../../shared/data-sharing.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  sharedMessage: any;

  constructor(private sharedService: DataSharingService) { }

  ngOnInit() {
    this.sharedService.recibirMensaje().subscribe((mensaje) => {
      this.sharedMessage = mensaje;
    });
  }

}
