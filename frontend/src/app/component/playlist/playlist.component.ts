import { Component, OnInit } from '@angular/core';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  faPlay = faPlay;
  faMusic = faMusic;
  regionVisible:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  verPlaylist(id){
    this.regionVisible = 'playlists';
  }

}
