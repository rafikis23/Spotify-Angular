import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from '../../services/artistas.service';

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
  constructor(private artistasService: ArtistasService) { }

  ngOnInit(): void {
    this.artistasService.obtenerArtistas();
  }
  verPlaylist(id){
    this.onVerPlaylist.emit(id);
    // this.regionVisible = 'playlists';
  }
  verArtista(id){
    this.onVerArtista.emit(id);
    // this.regionVisible = 'artistas';
  }


}
