import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  cookieValue!:string;

  constructor(private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.getCookie('loggedIn');
  }

  getCookie(name:string):void {
    this.cookieValue = this.cookie.get(name);

    console.log(this.cookieValue)
  }


  deleteCookie() {
    this.cookie.set('loggedIn', '');
  }

}
