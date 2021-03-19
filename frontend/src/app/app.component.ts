import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { AlbumComponent } from './component/album/album.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidebar') sideBarComponent: SidebarComponent;
  @ViewChild('playlistComponent') playlistComponent: PlaylistComponent;
  @ViewChild('albumComponent') albumComponent: AlbumComponent;
  title = 'frontend';
  regionVisible:string = '';
  verPlaylist(playlist){
    this.playlistComponent.verPlaylist(playlist);
    this.regionVisible = 'playlists';
    console.log('Ver playlist con ID ' + playlist);
  }
  verArtista(idArtista){
    this.regionVisible = 'artistas';
    console.log('Ver artista con ID desde AppComponent ' + idArtista);
    this.albumComponent.obtenerAlbums(idArtista);

  }
  seleccionarUsuario(usuario){
    console.log('Usuario seleccionado (AppComponent)', usuario);
    this.sideBarComponent.obtenerPlaylist(usuario);
  }
}
