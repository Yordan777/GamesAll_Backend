import { Table,Model,Column,DataType } from "sequelize-typescript";

@Table({
    tableName: 'Games'
})

class Games extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    declare paciente : string

    @Column({
        type: DataType.STRING(100)
    })
    declare propietario: string

    @Column({
        type: DataType.STRING(100)
    })
    declare email: string

    @Column({
        type: DataType.STRING(100)
    })
    declare fecha: string

    @Column({
        type: DataType.STRING(100)
    })
    declare sintomas: string
}

export default Games