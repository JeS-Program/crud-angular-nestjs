import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-add-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-usuario.component.html',
  styleUrl: './add-usuario.component.css',
})
export class AddUsuarioComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  mostrarUsers: boolean = false;

  // plusuarios$: Observable<any> | undefined

  constructor(private usuariosService: UsuariosService) {}

  usuarios = [
    {
      id: '',
      username: '',
      email: '',
      password: '',
    },
  ];

  //Crear usuario
  addUser() {
    const newUser: any = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.usuarios.push(newUser);
    this.usuariosService.addUsuario(newUser).subscribe(
      (response) => {
        alert(`Usuario agregado correctamente.`);
      },
      (error) => {
        console.error('Error al agregar el usuario:', error);
        alert('Error al agregar el usuario. Por favor.');
      }
    );
    // Limpiar los campos del formulario
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
