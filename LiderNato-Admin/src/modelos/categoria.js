const categoria = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('categorias', {                 //aqui va el nombre de la tabla que vamos a crear
        idCategoria:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING(99),
        creacionCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = categoria                                    //verificar el nombre