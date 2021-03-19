import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from '../../services/artistas.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();
  faPlay = faPlay;
  faMusic = faMusic;
  regionVisible:string = '';
  artistas: any = [];
  playlists: any = [];
  constructor(
    private artistasService: ArtistasService,
    private usuariosService: UsuariosService
    ) { }

  ngOnInit(): void {
    // Obtener artistas
    this.artistasService.obtenerArtistas().subscribe(
      res => {
        this.artistas = res;
        console.log('Artistas: ', this.artistas);
      },
      error => {
        console.log(error);
      }
    );
    // Obtener playlists
  }
  verPlaylist(playlist){
    this.onVerPlaylist.emit(playlist);
    // this.regionVisible = 'playlists';
  }
  verArtista(artista){
    this.onVerArtista.emit(artista._id);
    console.log('El artista seleccionado desde el Sidebar:', artista._id);
    // this.regionVisible = 'artistas';
  }
  obtenerPlaylist(usuario){
    //
    console.log('Obtener el usuario seleccionado desde el sidebar', usuario);
    this.usuariosService.obtenerPlaylistsUsuario(usuario).subscribe(
      res => {
        // this.playlists = res;
        console.log('Playlists: ', res.playlists);
        this.playlists = res.playlists;
      },
      error => console.log(error)
    );
  }

}
