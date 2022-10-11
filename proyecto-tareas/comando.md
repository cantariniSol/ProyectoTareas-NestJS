COMANDOS
=====================

- Crear un nuevo proyecto
  
> npm i -g @nestjs/cli
>
> nest new nombre-proyecto
> cd nombre-proyecto
> npm run start:dev

--------------------------
> nest g controller tareas
> nest g service tareas
> nest g module tareas

CONEXIÓN  A BASES DE DATOS
==============================
1. En backend 
> npm install --save @nestjs/typeorm typeorm mysql12

2. Crear una base de datos 
3.  En app.module.ts
> import {TypeOrmModule} from '@nestjs/typeorm';
> 
> TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Pass123',
      database: 'example',
      autoLoadEntities: true,
      synchronize: true,
    }