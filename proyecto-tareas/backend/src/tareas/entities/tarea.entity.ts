//Una entidad es una clase
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tareas')
export class Tarea{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length:50, nullable: false})
    nombre: string

    @Column({type:'text'})
    descripcion: string

    @Column({type: 'bool'})
    done: boolean

}