const {DataTypes}= require('sequelize')
const sequelize = require('../config/database/dbsequelize')
const Movies = sequelize.define('movies',{
    title:{
        type: DataTypes.STRING
    }
})

module.exports={Movies}