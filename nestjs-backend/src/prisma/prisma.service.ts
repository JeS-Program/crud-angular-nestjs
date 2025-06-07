import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  //Connectar BD
  async onModuleInit() {
    await this.$connect();
  }

  //Desconectar BD
  async onModuleDestroy() {
    await this.$disconnect();
  }

  //Cerrar Prisma de manera segura
  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
