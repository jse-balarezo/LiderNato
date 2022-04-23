const cliente = (sequelize, type) =>{                     //Nombre de la constante
    return sequelize.define('clientes', {                 //aqui va el nombre de la tabla que vamos a crear
        idCliente:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        name: type.STRING(50),
        correo: type.STRING(70),
        phone: type.INTEGER,
        creacionCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = cliente                                    //verificar el nombre