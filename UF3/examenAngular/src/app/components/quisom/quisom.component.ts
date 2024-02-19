import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quisom',
  templateUrl: './quisom.component.html',
  styleUrls: ['./quisom.component.css']
})
export class QuisomComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(!(localStorage.getItem('user'))) {
      this.router.navigate(['/']);
    }

  }

}
