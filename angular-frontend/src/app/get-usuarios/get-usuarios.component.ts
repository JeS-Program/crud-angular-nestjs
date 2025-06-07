import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-usuarios.component.html',
  styleUrl: './get-usuarios.component.css',
})
export class GetUsuariosComponent {
  constructor(private usuariosService: UsuariosService) {}

  modalEliminarVisible = false;
  username: string = '';
  email: string = '';
  password: string = '';
  mostrarUsers: boolean = false;

  usuarios = [
    {
      id: '',
      username: '',
      email: '',
      password: '',
    },
  ];

  //Se ejecuta la abrir la página
  ngOnInit() {
    this.mostrarUsuario();
  }

  //Ver todos los usuarios
  mostrarUsuario() {
    try {
      this.usuariosService.getUsuarios().subscribe((data: any) => {
        this.usuarios = data;
        this.mostrarUsers = true;
      });
    } catch (error) {
      console.error('Error al mostrar los usuarios:', error);
      alert('Error al cargar los usuarios. Por favor.');
    }
  }

  //Activar modal para confirmar eliminar usuario
  modalEliminar() {
    this.modalEliminarVisible = true;
  }

  //Eliminar usuario
  deleteUser(id: string) {
    const userIndex = this.usuarios.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.usuarios.splice(userIndex, 1);
      this.usuariosService.deleteUsuario(id).subscribe(
        (response) => {
          alert(`Usuario eliminado correctamente.`);
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Error al eliminar el usuario. Por favor.');
        }
      );
    } else {
      alert('Usuario no encontrado.');
    }
    this.modalEliminarVisible = false;
  }
}
