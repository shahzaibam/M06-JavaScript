import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(!(localStorage.getItem('user'))) {
      this.router.navigate(['/']);
    }

  }


}
