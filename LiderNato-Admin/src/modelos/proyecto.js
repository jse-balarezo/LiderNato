const proyecto = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('proyectos', {                 //aqui va el nombre de la tabla que vamos a crear
        idProyecto:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        creacionUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = proyecto                                     //verificar el nombre
    