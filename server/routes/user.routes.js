const express= require('express');
const router= express.Router();
const {validateUser} = require('../models/user.model')
const {login, getUser, createUser, getUserById,editUser, deleteUser}= require('../controller/user.controller')
const {middleware}= require('../middlewares/middlewares')
const uploadMulter = require('../config/multer/multer.config')
const {sendEmail} = require('../controller/email.controller')
router.get('/', getUser)
router.get('/getUser/:id',middleware, getUserById )
router.post('/login', login)
router.post('/email/:email', sendEmail)
router.post('/createUser',[uploadMulter.single("image")],createUser)
router.put('/editUser/:id', editUser)
router.delete('/deleteUser/:id/:email', deleteUser)


module.exports = router