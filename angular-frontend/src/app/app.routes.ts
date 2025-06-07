import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { GetUsuariosComponent } from './get-usuarios/get-usuarios.component';

export const routes: Routes = [
  // Ruta por defecto: redirige al inicio
  { path: '', component: UsuariosComponent, pathMatch: 'full' },

  // Ruta para la lista de usuarios
  { path: 'users', component: GetUsuariosComponent },

  // Ruta para crear un nuevo usuario
    { path: 'users/create', component: AddUsuarioComponent },

  // Ruta para editar un usuario específico (con un parámetro :id)
  { path: 'users/edit/:id', component: UpdateUsuarioComponent },

  // Ruta wildcard: maneja cualquier otra URL no definida (¡siempre al final!)
  //   { path: '**', component: NotFoundComponent }
];
