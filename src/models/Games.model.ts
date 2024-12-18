import { Table,Model,Column,DataType } from "sequelize-typescript";

@Table({
    tableName: 'Games'
})

class Games extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    declare nombre : string

    @Column({
        type: DataType.STRING(100)
    })
    declare plataforma: string

    @Column({
        type: DataType.STRING(100)
    })
    declare tamaño: string

    @Column({
        type: DataType.STRING(100)
    })
    declare imagen: string

    @Column({
        type: DataType.STRING(100)
    })
    declare trailer: string

    @Column({
        type: DataType.STRING(100)
    })
    declare descripcion: string
}

export default Games