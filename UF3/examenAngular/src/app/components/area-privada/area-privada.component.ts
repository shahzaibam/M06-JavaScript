import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-area-privada',
  templateUrl: './area-privada.component.html',
  styleUrls: ['./area-privada.component.css']
})
export class AreaPrivadaComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    if(!(localStorage.getItem('user'))) {
      this.router.navigate(['/']);
    }


  }




}
