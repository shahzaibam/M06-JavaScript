import { Injectable } from '@angular/core';
import { Article } from "../model/Article/Article";

@Injectable({
  providedIn: 'root'
})
export class ColleccionsService {

  allCollections: Article[] = [];

  nom = 'nom';
  desc = 'desc';
  preu = 0;

  constructor() { }

  insertarValoresCollections() {
    for (let i = 1; i <= 100; i++) {
      this.allCollections.push(new Article(this.nom + i, this.desc + i, this.preu + i));
    }

    return this.allCollections;
  }
}
