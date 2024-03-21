import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  valorLocalStorage!:any;

  constructor() {
  }

  ngOnInit(): void {
    this.getLocalStorage();
  }

  getLocalStorage():boolean {

    if(localStorage.getItem('logged')) {
      this.valorLocalStorage = true;
    }else {
      this.valorLocalStorage = false;
    }

    console.log(this.valorLocalStorage)
    return this.valorLocalStorage;
  }



}
