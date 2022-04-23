const detalle_contenido = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('detalle_contenidos', {                 //aqui va el nombre de la tabla que vamos a crear
        idDetalleContenido:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        opinions: type.STRING(99),
        councils: type.STRING(99),
        creacionDetalleContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = detalle_contenido                                   //verificar el nombre