import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../services/usuarios.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSeleccionarUsuario = new EventEmitter();
  @Output() onAgregarPlaylist = new EventEmitter();
  usuarios: any = [];
  usuarioSeleccionado: any;
  faPlus = faPlus;
  faUserFriends = faUserFriends;
  nombrePlaylist: string = '';
  constructor(
    private modalService: NgbModal,
    private modalUsuarioService: NgbModal,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log('Usuarios: ', this.usuarios);
      },
      error => {
        console.log(error);
      }
    );
  }
  guardarPlaylist(){
    this.usuariosService.guardarPlaylist(
      this.usuarioSeleccionado,
      this.nombrePlaylist
    ).subscribe(
      res => {
        console.log(res);
        if ( res.ok === 1) {
          this.modalService.dismissAll();
          this.onAgregarPlaylist.emit((this.usuarioSeleccionado));
        }
      },
      error => {
        console.log(error);
      }
    );
   }
  seleccionarUsuario() {
    console.log(this.usuarioSeleccionado);
    this.onSeleccionarUsuario.emit(this.usuarioSeleccionado);
    this.modalUsuarioService.dismissAll();
   }
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
