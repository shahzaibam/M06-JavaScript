import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: any;
  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.httpService.getEvents().subscribe(
      (response) => {
        this.events = response.events;
        this.isLoading = false; //desactivo el preloader
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
        this.isLoading = false; //desactivo el preloader
      }
    );
  }
}
