import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/tareas.controller';
import { TareasService } from './tareas/tareas.service';
import { TareasModule } from './tareas/tareas.module';

import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TareasModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Pass123',
      database: 'tareas',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }
  )],
  controllers: [AppController, TareasController],
  providers: [AppService, TareasService],
})
export class AppModule {}
