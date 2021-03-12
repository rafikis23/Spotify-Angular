import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor() { }

  obtenerArtistas(){
    console.log('Obtener listados de artistas de el servidor');
  }
}
