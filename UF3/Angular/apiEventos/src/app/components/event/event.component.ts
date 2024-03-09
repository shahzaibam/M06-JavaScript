import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventForm: FormGroup;
  events: any[] = [];

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (response:any) => this.events = response.events,
      error: (error:any) => console.error('Error getting events', error)
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value).subscribe({
        next: (response:any) => console.log('Event added', response),
        error: (error:any) => console.error('Error adding event', error)
      });
    }
  }
}
