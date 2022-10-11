
import { Tareas } from './interfaces/tareas.interface'

import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';
import { Body, Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearTareas } from './dto/crearTareas.dto';


@Injectable()
export class TareasService {

    constructor(
        @InjectRepository(Tarea)
        private tareaRepository: Repository<Tarea>,
        ) {}

    //Muestra todas las tareas
    async getTareas(): Promise<Tarea[]>{
        return await this.tareaRepository.find() 
    }

    //Muestra una tarea por id
    async getTarea(id:number): Promise<Tarea>{
        return await this.tareaRepository.findOne({
            where: {id,}
            });
    }
    

    //Crear tarea
    async insertNewTarea(Body: CrearTareas) {
        const tarea = this.tareaRepository.create(Body);
        await this.tareaRepository.save(tarea);
        return tarea;
    }

    //Actualizar tarea
    async updateTarea(id: number, Body: CrearTareas){
        const tareaId = await this.tareaRepository.findOne({
            where: {id,}
        })
        if(!tareaId) throw new NotFoundException(`No se encuentra la tarea ${id}`);
        
        const editarTarea = Object.assign(tareaId, Body);
        return await this.tareaRepository.save(editarTarea);
    }

    //Eliminar tarea
    async deleteTarea(id:number){
        const tarea = await this.tareaRepository.findOne({
            where: {id,}
        });
        if(tarea){
            return this.tareaRepository.remove(tarea);
        }
        throw new NotFoundException(`No se encuentra la tarea ${id}`);
    }


//SIMULAMOS UNA BASE DE DATOS // OBJETO HARDCODEADO
    // tareas: Tareas[] = [
    //     {
    //         id: 1,
    //         titulo: "Darle de comer al Gato",
    //         descripcion: "Gati a las 12:00hs",
    //         done: true
    //     },
    //     {
    //         id:2,
    //         titulo: 'Salir a correr',
    //         descripcion: "En la costa a las 10:00hs",
    //         done: false
    //     },
    //     {
    //         id:3,
    //         titulo: 'Clases de Programación',
    //         descripcion: "En ISAUI a las 8:30hs",
    //         done: true
    //     },
    //     {
    //         id:4,
    //         titulo: 'Curso de Cypress',
    //         descripcion: "Encode 14:00hs",
    //         done: false
    //     }
    // ]


}
