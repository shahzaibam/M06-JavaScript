import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/model/Events';
import { DbService } from 'src/app/services/db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: Events[] = [];
  addEvent: FormGroup;
  editEvent: FormGroup;

  constructor(private db: DbService) {
    this.addEvent = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      descripcio: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      creado_por: new FormControl('', [Validators.required]),
    });

    this.editEvent = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      descripcio: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      creado_por: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.db.getEvents().subscribe(
      (result: any) => {
        this.events = result.results.map((event: any) => new Events(
          event.nombre,
          event.descripcion,
          event.fecha,
          event.hora,
          event.creado_por,
          event.id
        ));
      },
      error => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }

  enviament() {
    if (this.addEvent.valid) {
        const newEvent = this.addEvent.value; 
        this.db.insert(newEvent.nom, newEvent.descripcio, newEvent.fecha, newEvent.hora, newEvent.creado_por).subscribe(
            (result: any) => {
                this.getEvents();
            },
            error => {
                console.error('Error al insertar el evento:', error);
            }
        );
    }
}

  abrirModalEditar(evento: Events) {
    this.editEvent.setValue({
      id: evento.id,
      nom: evento.nombre,
      descripcio: evento.descripcion,
      fecha: evento.fecha,
      hora: evento.hora,
      creado_por: evento.creado_por,
    });
  }

  editarEvento() {
    if (this.editEvent.valid) {
      this.db.update(this.editEvent.value.id, this.editEvent.value).subscribe(
        (result: any) => {
          this.getEvents();
        },
        error => {
          console.error('Error al actualizar el evento:', error);
        }
      );
    }
  }

  eliminarEvento(id: string) {
    this.db.delete(id).subscribe(
      (result: any) => {
        this.getEvents();
      },
      error => {
        console.error('Error al eliminar el evento:', error);
      }
    );
  }
}
