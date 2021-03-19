import { Component, OnInit } from '@angular/core';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: any = {};
  faPlay = faPlay;
  faMusic = faMusic;
  regionVisible:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  verPlaylist(playlist){
    this.playlist = playlist;
    console.log('Ver desde PlaylistComponent', playlist);
  }

}
