
import { Component, OnInit } from '@angular/core';

interface Torneo {
  id: number;
  name: string;
  description: string;
  fecha: string;
  hora: string;
  nombreCreador: string;
}


@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentComponent implements OnInit {
  tournaments: Torneo[] = [];
  status?: string;
  userType: string = 'guest';

  constructor() {
    // Aquí puedes inyectar servicios como un servicio de torneos
  }

  ngOnInit(): void {
    // Aquí deberías cargar los torneos, por ejemplo, desde un servicio
    this.cargarTorneos();
  }

  cargarTorneos(): void {
    this.tournaments = []; // Limpiar la lista de torneos antes de cargar nuevos
    // Generar 10 torneos con información aleatoria
    for (let i = 1; i <= 10; i++) {
      this.tournaments.push({
        id: i,
        name: `Torneo ${i}`,
        description: `Este es un torneo emocionante número ${i} con competiciones intensas.`,
        fecha: `2024-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`, // Genera fechas aleatorias
        hora: `${Math.floor(Math.random() * 23) + 1}:00`, // Genera horas aleatorias
        nombreCreador: `Organizador ${Math.floor(Math.random() * 10) + 1}` // Nombres de organizadores aleatorios
      });
    }
  }

  apuntar(torneoId: number): void {
    // Implementa la lógica para inscribirse en un torneo
    console.log(`Usuario inscrito en el torneo con ID ${torneoId}`);
    // En un caso real, probablemente harías una llamada a un servicio que maneje la inscripción
  }
}
