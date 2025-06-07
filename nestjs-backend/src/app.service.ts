import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  //Crear usuario
  async createUser(data) {
    return await this.prisma.usuario.create({
      data,
    });
  }

  //Buscar todos los usuarios
  async getAllUsers() {
    return await this.prisma.usuario.findMany();
  }

  //Buscar un usuario por ID
  async getUserById(id: number) {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  //Modificar usuario por ID
  async updateUserById(id: number, data) {
    return await this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  //Eliminar usuario por ID
  async deleteUserById(id: number) {
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}
