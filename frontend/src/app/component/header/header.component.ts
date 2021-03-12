import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private modalUsuarioService: NgbModal) { }

  ngOnInit(): void {
  }
  guardarPlaylist(){ }
  seleccionarUsuario() { }
  abrirNuevaPlaylist(modal){
    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: true
      });
  }
  abrirCambiarUsuario(modal){
    this.modalUsuarioService.open(
      modal,
      {
        size: 'xs',
        centered: true
      }
    );
  }

}
