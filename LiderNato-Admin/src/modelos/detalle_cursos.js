const detalle_curso = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('detalle_cursos', {                 //aqui va el nombre de la tabla que vamos a crear
        idDetalleCurso:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        phrases: type.INTEGER,
        creacionDetalleCurso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleCurso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = detalle_curso                                     //verificar el nombre