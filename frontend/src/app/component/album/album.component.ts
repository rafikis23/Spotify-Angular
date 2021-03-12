import { Component, OnInit } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faPlay = faPlay;
  faPlus = faPlus;
  regionVisible:string = '';
  constructor(private modalAgregarService: NgbModal) { }

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
  verArtista(id){
    this.regionVisible = 'artistas';
  }


}
