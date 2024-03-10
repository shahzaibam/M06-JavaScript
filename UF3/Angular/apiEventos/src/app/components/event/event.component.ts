import { Component, OnInit } from '@angular/core';

interface Evento {
  id: number;
  name: string;
  description: string;
  fecha: string;
  hora: string;
  nombreCreador: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventos: Evento[] = [];
  status?: string;
  userType: string = 'guest';

  constructor() {
  }

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos(): void {
    this.eventos = []; // Limpiar la lista de torneos antes de cargar nuevos
    // Generar 10 torneos con información aleatoria
    for (let i = 1; i <= 10; i++) {
      this.eventos.push({
        id: i,
        name: `Torneo ${i}`,
        description: `Este es un torneo emocionante número ${i} con competiciones intensas.`,
        fecha: `2024-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`, // Genera fechas aleatorias
        hora: `${Math.floor(Math.random() * 23) + 1}:00`, // Genera horas aleatorias
        nombreCreador: `Organizador ${Math.floor(Math.random() * 10) + 1}` // Nombres de organizadores aleatorios
      });
    }
  }

  apuntar(eventoId: number): void {
    console.log(`El usuario se ha apuntado al evento con ID ${eventoId}`);
  }
}
