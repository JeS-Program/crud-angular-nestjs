import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Crear usuario
  @Post('users')
  createUser(@Body() data) {
    return this.appService.createUser(data);
  }

  //Mostrar todos los usuarios
  @Get('users')
  getUser() {
    return this.appService.getAllUsers();
  }

  //Mostrar un usuario por ID
  @Get('users/:id')
  async getUserById(@Param('id') id: number) {
    try {
      return await this.appService.getUserById(Number(id));
    } catch (error) {
      console.log(error.message);
      return { error: 'El usuario no existe' };
    }
  }

  //Modificar un usuario por ID
  @Put('users/:id')
  async updateUserById(@Param('id') id: number, @Body() data) {
    try {
      return await this.appService.updateUserById(Number(id), data);
    } catch (error) {
      console.log(error.message);
      return { error: 'El usuario no existe' };
    }
  }

  //Eliminar un usuario por ID
  @Delete('users/:id')
  async deleteUserById(@Param('id') id: number) {
    try {
      return await this.appService.deleteUserById(Number(id));
    } catch (error) {
      console.log(error.message);
      return { error: 'El usuario no existe' };
    }
  }

}
