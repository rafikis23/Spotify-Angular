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
  usuarios: any = [];
  usuarioSeleccionado: any;
  faPlus = faPlus;
  faUserFriends = faUserFriends;
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
  guardarPlaylist(){ }
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
