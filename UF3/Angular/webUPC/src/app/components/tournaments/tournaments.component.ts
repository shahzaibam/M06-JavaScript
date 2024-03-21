import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent {
  tournaments: any;
  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getAllTournaments();
  }

  getAllTournaments() {
    this.httpService.getTournaments().subscribe(
      (response) => {
        console.log(response)
        this.tournaments = response.tournaments;
        this.isLoading = false; //desactivo el preloader
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
        this.isLoading = false; //desactivo el preloader
      }
    );
  }
}
