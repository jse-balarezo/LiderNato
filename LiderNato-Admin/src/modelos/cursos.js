const curso = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('cursos', {                 //aqui va el nombre de la tabla que vamos a crear
        idCurso:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING(99),
        date: type.DATE,                                 //VERIFICAR DATE
        creacionCurso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCurso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = curso                                    //verificar el nombre