const express= require('express');
const router= express.Router();

const {getUser, createUser, getUserById,editUser, deleteUser}= require('../controller/user.controller')


router.get('/', getUser)
router.get('/getUser/:id/:name/:age', getUserById )
router.post('/createUser', createUser)
router.put('/editUser/:id', editUser)
router.delete('/deleteUser/:id', deleteUser)


module.exports = router