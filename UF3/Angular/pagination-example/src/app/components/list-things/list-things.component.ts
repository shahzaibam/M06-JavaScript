import { Component } from '@angular/core';

@Component({
  selector: 'app-list-things',
  templateUrl: './list-things.component.html',
  styleUrls: ['./list-things.component.css']
})
export class ListThingsComponent {
  allThings: any[] = [
    { name: 'Thing 1' },
    { name: 'Thing 2' },
    { name: 'Thing 3' },
    { name: 'Thing 4' },
    { name: 'Thing 5' },
    { name: 'Thing 6' },
    { name: 'Thing 7' },
    { name: 'Thing 8' },
    { name: 'Thing 9' },
    { name: 'Thing 10' },
    { name: 'Thing 11' },
    { name: 'Thing 12' },
    { name: 'Thing 13' },
    { name: 'Thing 14' },
    { name: 'Thing 15' }
  ];

  currentPage = 1;
  itemsPerPage = 2; // Cantidad de elementos por página
}
