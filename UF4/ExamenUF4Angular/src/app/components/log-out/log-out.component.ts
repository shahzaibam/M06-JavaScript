import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(!(localStorage.getItem('logged'))) {
      this.router.navigate(['/']);
    }else {
      localStorage.removeItem('logged');
      this.router.navigate(['/suscripcio']);
    }

  }
}
