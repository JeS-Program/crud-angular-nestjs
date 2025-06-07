import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}
  
  getUsuarios() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  getUsuario(id: string) {
    return this.httpClient.get(`http://localhost:3000/users/${id}`);
  }

  addUsuario(usuario: any) {
    return this.httpClient.post('http://localhost:3000/users', usuario);
  }

  deleteUsuario(id: string) {
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }

  updateUsuario(usuario: any) {
    return this.httpClient.put(`http://localhost:3000/users/${usuario.id}`, usuario);
  }
}
