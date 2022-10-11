import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CrearTareas } from './dto/crearTareas.dto';
import { TareasService } from './tareas.service';



@Controller('tareas')
export class TareasController {
    constructor( private readonly tareaService:TareasService){}
    
    @Get()
    async obtenerTareas(){
        const data = await this.tareaService.getTareas();
        return {
            message: 'Petición correcta!',
            data
        }
    }   

    @Get(':tareaId')
    async obtenerTarea(@Param('tareaId') id:number) {
        const data = await this.tareaService.getTarea(id);
        return {
            message: 'Petición correcta!', 
            data
        }
    }


    @Post()
    async crearTareas(@Body() tarea:CrearTareas){
        const data = await this.tareaService.insertNewTarea(tarea);
        return {
            message: 'La tarea fue creada exitosamente!',
            data
        }
    }

    @Put(':tareaId')
    async actualizarTarea(@Param('tareaId') id:number, @Body() tarea: CrearTareas){
        const data = await this.tareaService.updateTarea(id, tarea)
        return {
            message: 'La tarea se actualizó correctamente!',
            data
        }
    }

    @Delete(':tareaId')
    async elininarTarea(@Param('tareaId') id:number){
        const data = await this.tareaService.deleteTarea(id)
        return {
            message: 'La tarea fue eliminada correctamente!',
            data
        }
    }
}
