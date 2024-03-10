import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventos: any[] = [];
  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMyEvents();
  }

  getMyEvents(): void {
    this.httpService.getSingleUserEvents().subscribe(
      (response) => {
        this.eventos = response.events;
        this.isLoading = false; //desactivo el preloader
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
        this.isLoading = false; //desactivo el preloader
      }
    );
  }


  addEvent(event: any) {
    event.preventDefault(); // Prevenir la recarga de la página
    const formData = {
      name: event.target.name.value,
      description: event.target.description.value,
      date: event.target.fecha.value,
      time: event.target.hora.value,
      // Añade más campos si es necesario
    };
    this.httpService.createEvent(formData).subscribe(response => {
      // Manejar respuesta - por ejemplo, cerrar modal, mostrar mensaje, etc.
    }, error => {
      // Manejar error
    });
  }
}
