const {Sequelize, DataTypes} = require('sequelize');
const Joi = require('joi')
const sequelize = require('../config/database/dbsequelize')

    const User= sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING
        },
        age:{
            type: DataTypes.INTEGER
        },
        gender:{
            type: DataTypes.STRING
        },
        email:{
            type:DataTypes.TEXT,
        allowNull: false,
            validate:{
                isEmail:{
                    msg: 'please enter a valid email'
                }
            }
        },
        password:{
            type: DataTypes.TEXT
        },
        description:{
            type: DataTypes.TEXT
        },
        Image:{
            type: DataTypes.TEXT
        },
        role:{
            type:DataTypes.INTEGER
        }

    })

    const validateUser=()=>{
        const schema= Joi.object({
            name: Joi.string().min(2).max(100).required()
            .messages({
                'string.empty': "ingrese el nombre",
                'string.min': "el nombre debe tener entre 2 y 100 caracteres",
                'string.max': "el nombre debe tener entre 2 y 100 caracteres",
                'any.required':"ingrese el nombre"
            }),
            age: Joi.number().min(5).max(75).required()
        })
    }

module.exports={User, validateUser}
  
