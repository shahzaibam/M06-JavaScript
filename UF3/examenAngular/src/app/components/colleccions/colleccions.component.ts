import { Component, OnInit } from '@angular/core';
import { ColleccionsService } from '../../servicesCollections/colleccions.service';

@Component({
  selector: 'app-colleccions',
  templateUrl: './colleccions.component.html',
  styleUrls: ['./colleccions.component.css']
})
export class ColleccionsComponent implements OnInit {

  valores!: any;


  p: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  constructor(private genColeccions: ColleccionsService) { }

  ngOnInit() {
    this.loadValues();
  }

  loadValues() {
    this.valores = this.genColeccions.insertarValoresCollections();
    this.totalItems = this.valores.length;
  }

  updateItemsPerPage() {
    this.p = 1; // Resetear a la primera página cuando cambie el número de elementos por página
    this.loadValues(); // Recargar valores según el nuevo número por página

  }
}
