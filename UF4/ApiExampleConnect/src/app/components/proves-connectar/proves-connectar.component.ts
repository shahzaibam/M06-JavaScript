import {Component, OnInit} from '@angular/core';
import {ConectarService} from "../../services/conectar.service";

@Component({
  selector: 'app-proves-connectar',
  templateUrl: './proves-connectar.component.html',
  styleUrls: ['./proves-connectar.component.css']
})
export class ProvesConnectarComponent implements OnInit{


  constructor(private connectar: ConectarService) {
  }

  ngOnInit(): void {
    this.connectar.getPosts().subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

}
