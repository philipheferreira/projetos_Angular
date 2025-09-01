import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  @Input({ required: true}) usuario!: Usuario;

  get imagemUrl() {
    return '../../img/usuarios/' + this.usuario.avatar;
  }

  @Output() usuarioSelecionado = new EventEmitter<string>();

  metodoSelecionarUsuario() {
    this.usuarioSelecionado.emit(this.usuario.id);
  }
}
