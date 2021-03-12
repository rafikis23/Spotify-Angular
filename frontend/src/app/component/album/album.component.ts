import { Component, OnInit } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faPlay = faPlay;
  faPlus = faPlus;
  regionVisible:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  verArtista(id){
    this.regionVisible = 'artistas';
  }


}
