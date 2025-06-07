import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-update-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-usuario.component.html',
  styleUrl: './update-usuario.component.css',
})
export class UpdateUsuarioComponent {
  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  id: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';

  ngOnInit() {
    // Obtener el ID del usuario desde la URL
    const url = this.router.url;
    const id = url.split('/').pop(); // Extraer el último segmento de la URL

    if (id) {
      this.getUsuario(id); // Llamar al método para obtener los datos del usuario
    } else {
      alert('ID de usuario no válido.');
      this.router.navigate(['/users']);
    }
  }

  //Obtener datos del usuario por ID para poder modificarlo
  getUsuario(id: string) {
    this.usuariosService.getUsuario(id).subscribe(
      (usuario: any) => {
        this.id = usuario.id;
        this.username = usuario.username;
        this.email = usuario.email;
        this.password = usuario.password;        
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
        alert('Error al obtener el usuario.');
      }
    );
  }

  updateUsuario() {
    const updatedUser = {
      id: this.id,
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.usuariosService.updateUsuario(updatedUser).subscribe(
      (response) => {
        alert('Usuario actualizado correctamente.');
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
        alert('Error al actualizar el usuario.');
      }
    );

    // Limpiar los campos del formulario
    this.username = '';
    this.email = '';
    this.password = '';
  }

  cancelUpdate() {
    // Limpiar los campos del formulario
    this.username = '';
    this.email = '';
    this.password = '';
    //Redigir a la lista de usuarios
    this.router.navigate(['/users']);
  }
}
