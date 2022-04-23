const contenido = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('contenidos', {                 //aqui va el nombre de la tabla que vamos a crear
        idContenido:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING(99),
        description: type.STRING(99),
        video: type.INTEGER,
        complete: type.BOOLEAN,                             //verificar booleano

        creacionContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = contenido                                    //verificar el nombre