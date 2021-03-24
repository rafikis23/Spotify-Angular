import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasService } from '../../services/artistas.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Output() onAgregarCancionPlaylist = new EventEmitter();
  albums: any = [];
  artistaSeleccionado: any = [];
  playlists: any = [];
  idUsuarioSeleccionado: string;
  albumSeleccionado: string;
  cancionSeleccionado: any;
  playlistActual: any;
  faPlay = faPlay;
  faPlus = faPlus;
  regionVisible: string = '';
  constructor(
    private modalAgregarService: NgbModal,
    private artistasService: ArtistasService,
    private usuarioService: UsuariosService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
  }
  guardarCancion() {
    const data = {
      idUsuario: this.idUsuarioSeleccionado,
      idPlaylist: this.playlistActual,
      nombreArtista: this.artistaSeleccionado,
      cancion: this.cancionSeleccionado,
      nombreAlbum: this.albumSeleccionado
    };
    console.log('Los datos son:', data);
    this.usuarioService.guardarCancionPlaylist(data).subscribe(
      res => {
        console.log(res);
        if ( res.ok === 1) {
          this.modalAgregarService.dismissAll();
          this.onAgregarCancionPlaylist.emit((this.idUsuarioSeleccionado));
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  agregarPlaylist(modal, cancion, nombreAlbum) {
    this.cancionSeleccionado = cancion;
    this.albumSeleccionado = nombreAlbum;
    this.usuarioService.obtenerPlaylistsUsuario(this.idUsuarioSeleccionado).subscribe(
      res => {
        console.log('Las playlists para agregar son:', res.playlists);
        this.playlists = res.playlists;
        console.log('El usuario seleccionado es', this.idUsuarioSeleccionado);
        console.log('Agregar cancion a playlist', cancion);
        this.modalAgregarService.open(modal,
          {
            size: 'xs',
            centered: true
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
  verArtista(artista){
    this.regionVisible = 'artistas';
    console.log('Ver desde AlbumComponent', artista);
  }
  obtenerAlbums(artista){
    console.log('Obtener el artista seleccionado desde albumComponent', artista.idArtista);
    this.artistaSeleccionado = artista.nombreArtista;
    this.artistasService.obtenerAlbumsArtista(artista.idArtista).subscribe(
      res => {
        this.albums = res;
        console.log('Albums: ', res);
      },
      error => {
        console.log(error);
      }
    );
  }
      obtenerURL(imagen) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(../assets/${imagen})`);
      }
}
