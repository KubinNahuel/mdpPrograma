const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database/dbsequelize')

    const User= sequelize.define('User',{
        name:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        age:{
            type: DataTypes.INTEGER
        },

    })

module.exports={User}
  
