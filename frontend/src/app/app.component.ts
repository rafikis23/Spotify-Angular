import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidebar') sideBarComponent: SidebarComponent;
  title = 'frontend';
  regionVisible:string = '';
  verPlaylist(id){
    this.regionVisible = 'playlists';
  }
  verArtista(id){
    this.regionVisible = 'artistas';
  }
  seleccionarUsuario(usuario){
    console.log('Usuario seleccionado (AppComponent)', usuario);
    this.sideBarComponent.obtenerPlaylist(usuario);
  }
}
