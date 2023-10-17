const {Sequelize, DataTypes} = require('sequelize');
const Joi = require('joi')
const sequelize = require('../config/database/dbsequelize')
const {Post} = require('./post.model.js')
const {Movies} = require('./movies.model.js')
const {validateRequest}= require('../middlewares/middlewares')


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
//relaciones
//one to many
User.hasMany(Post,{
    foreignKey: 'userId',
    as: 'post'
})

Post.belongsTo(User,{
    foreignKey:'userId',
    as: 'user'
})

//many-to-many
User.belongsToMany(Movies,{
    through: 'userMovies'
})
Movies.belongsToMany(User,{
    through: 'userMovies'
})
//nuevas funciones del many to many
// User.addMovies()
// Movies.addUser()
//setUser o setMovies


//validaciones Joi

    const validateUser=(req,res,next)=>{
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
        validateRequest(req,res,next,schema)
    }

module.exports={User, validateUser}
  
