const {DataTypes}= require('sequelize')
const sequelize = require('../config/database/dbsequelize')
const Post = sequelize.define('post',{
    description:{
        type: DataTypes.STRING
    }
})

module.exports={Post}