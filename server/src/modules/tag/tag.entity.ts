import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BlogEntity } from "../blog/blog.entity";

@Entity()
export class TagEntity {
    @PrimaryGeneratedColumn()
    id : number
    @Column({length:10})
    name:string
    @UpdateDateColumn({
        type:'datetime'
    })
    updataAt:Date
    @CreateDateColumn({
        type:'datetime'
    })
    createAt:Date
}