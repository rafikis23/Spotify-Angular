import { Component, OnInit } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasService } from '../../services/artistas.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any = [];
  faPlay = faPlay;
  faPlus = faPlus;
  regionVisible:string = '';
  constructor(
    private modalAgregarService: NgbModal,
    private artistasService: ArtistasService
    ) { }

  ngOnInit(): void {
  }
  guardarCancion() {}
  agregarPlaylist(modal) {
    this.modalAgregarService.open(
      modal,
      {
        size: 'xs',
        centered: true
      }
    );
  }
  verArtista(artista){
    this.regionVisible = 'artistas';
    console.log('Ver desde AlbumComponent', artista);
  }
  obtenerAlbums(idArtista){
    console.log('Obtener el artista seleccionado desde albumComponent', idArtista);
    this.artistasService.obtenerAlbumsArtista(idArtista).subscribe(
      res => {
        this.albums = res;
        console.log('Albums: ', res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
