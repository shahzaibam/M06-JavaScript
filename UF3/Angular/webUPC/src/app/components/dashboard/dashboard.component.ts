import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventos: any[] = [];
  torneos: any[] = [];
  isLoading: boolean = true;
  selectedEvent = { id: '', name: '', description: '', date: '', time: '', user: { name: '' } };
  isCompany: boolean = false; // Variable para controlar si es una empresa o no
  @ViewChild('addEventModalRef') addEventModalRef!: ElementRef;
  @ViewChild('editEventModalRef') editEventModalRef!: ElementRef;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMyEvents();
  }

  getMyEvents(): void {
    this.httpService.getSingleUserEvents().subscribe(
      (response) => {
        this.eventos = response.events;
        this.isCompany = response.events && response.events.length > 0 && response.events[0].user.type === 'empresa';
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
        this.isLoading = false;
      }
    );
  }


  addEvent(event: any): void {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      description: event.target.description.value,
      date: event.target.date.value,
      time: this.formatTime(event.target.time.value),
    };

    this.httpService.createEvent(formData).subscribe({
      next: () => this.getMyEvents(),
      error: (error) => console.error('Error al crear evento:', error)
    });

    this.closeModal(this.addEventModalRef);
  }



  formatTime(time: string): string {
    const match = time.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/);
    return match ? time : '';
  }


  editEvent(evento: any): void {
    // Convertir id de string a número
    this.selectedEvent = { ...evento, id: +evento.id };
  }


  updateEvent(event: any): void {
    event.preventDefault();
    const updatedEvent = {
      name: this.selectedEvent.name,
      description: this.selectedEvent.description,
      date: this.selectedEvent.date,
      time: this.selectedEvent.time,
    };
    this.httpService.updateEvent(Number(this.selectedEvent.id), updatedEvent).subscribe({
      next: () => this.getMyEvents(),
      error: (error) => console.error('Error al actualizar evento:', error)
    });


    this.closeModal(this.editEventModalRef);
  }


  checkEventDlt(evento: any): void {
    this.selectedEvent = { ...evento, id: evento.id };
  }


  deleteEvent(): void {
    if (this.selectedEvent && this.selectedEvent.id) {
      this.httpService.deleteEvent(this.selectedEvent.id).subscribe({
        next: () => {
          console.log('Evento eliminado con éxito');
          this.getMyEvents(); // Recargar la lista de eventos
          location.reload();
          this.closeModal(this.editEventModalRef); // Cerrar el modal si está abierto
        },
        error: (error) => {
          console.error('Error al eliminar el evento:', error);
        }
      });
    }
  }



  closeModal(modalRef: ElementRef): void {
    modalRef.nativeElement.style.display = 'none';
    modalRef.nativeElement.classList.remove('show');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    const backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops.length > 0) {
      document.body.removeChild(backdrops[0]);
    }
  }
}
