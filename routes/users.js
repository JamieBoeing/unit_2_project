const express = require('express')
const router = express.Router()
const userController =require('../controllers/users')



// POST createUser
router.post('/', userController.auth, userController.createUser)

// POST loginUser
router.post('/login', userController.auth, userController.logInUser)

// POST logoutUser
router.post('/logout', userController.auth, userController.logoutUser)

// PUT updateUser
router.put('/:id', userController.auth, userController.updateUser)

// DELETE deleteUser
router.delete('/:id', userController.auth, userController.deleteUser)


// GET showUser
router.get('/:id', userController.auth, userController.showUser)

// GET showAllUsers
router.get('/', userController.auth, userController.showAllUsers)



module.exports = router