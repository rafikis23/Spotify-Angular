import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }
  obtenerUsuarios(): Observable<any>{
    return this.httpClient.get('http://localhost:8888/usuarios', {});
  }
  obtenerPlaylistsUsuario(usuario): Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${usuario}/playlist`, {});
  }
  guardarCancionPlaylist(data: any): Observable<any>{
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${data.idUsuario}/playlist/${data.idPlaylist}/canciones`,
        {
          nombreCancion: data.cancion.nombreCancion,
          artista: data.nombreArtista,
          album: data.nombreAlbum
        });
  }
  guardarPlaylist(idUsuario, nombrePlaylist): Observable<any>{
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${idUsuario}/playlist`,
        {
            tituloPlaylist: nombrePlaylist
        }
    );
  }
  /*obtenerPlaylistCanciones(playlist): Observable<any>{
    // return this.httpClient.get(`http://localhost:8888/usuarios/${usuario}/playlists/${playlist}`, {});
  }*/
}
