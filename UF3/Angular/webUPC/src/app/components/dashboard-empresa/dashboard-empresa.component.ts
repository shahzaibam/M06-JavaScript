import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde @angular/forms
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-dashboard-empresa',
  templateUrl: './dashboard-empresa.component.html',
  styleUrls: ['./dashboard-empresa.component.css']
})
export class DashboardEmpresaComponent {
  eventos: any[] = [];
  torneos: any[] = [];
  isLoading: boolean = true;
  selectedEvent: any = { name: '', description: '', date: '', time: '' }; // Debes inicializar las propiedades con los valores adecuados
  isCompany: boolean = false; // Variable para controlar si es una empresa o no
  @ViewChild('addEventModalRef') addEventModalRef!: ElementRef;
  @ViewChild('editEventModalRef') editEventModalRef!: ElementRef;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMyEvents();
    this.getMyTournaments();
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


  getMyTournaments(): void {
    this.httpService.getSingleUserTournaments().subscribe(
      (response) => {
        this.torneos = response.tournaments;
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


  addTournament(event: any): void {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      description: event.target.description.value,
      date: event.target.date.value,
      time: this.formatTime(event.target.time.value),
    };

    this.httpService.createTournament(formData).subscribe({
      next: () => this.getMyTournaments(),
      error: (error) => console.error('Error al crear torneo:', error)
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


  editTournament(tournament: any): void {
    // Convertir id de string a número
    this.selectedEvent = { ...tournament, id: +tournament.id };
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


  updateTournament(event: any): void {
    event.preventDefault();
    const updatedTournament = {
      name: this.selectedEvent.name,
      description: this.selectedEvent.description,
      date: this.selectedEvent.date,
      time: this.selectedEvent.time,
    };

    this.httpService.updateTournament(Number(this.selectedEvent.id), updatedTournament).subscribe({
      next: () => this.getMyTournaments(),
      error: (error) => console.error('Error al actualizar tournament:', error)
    });

    this.closeModal(this.editEventModalRef);
  }

  checkEventDlt(evento: any): void {
    this.selectedEvent = { ...evento, id: evento.id };
  }

  checkTournamentDlt(tournament: any): void {
    this.selectedEvent = { ...tournament, id: tournament.id };
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


  deleteTournament(): void {
    if (this.selectedEvent && this.selectedEvent.id) {
      this.httpService.deleteTournament(this.selectedEvent.id).subscribe({
        next: () => {
          console.log('Torneo eliminado con éxito');
          this.getMyTournaments(); // Recargar la lista de torneos
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
