require('dotenv').config()
const User = require('../models/user')
const Recipe = require('../models/recipe')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY



exports.auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, secret)
        const user = await User.findOne({ _id: data._id })
            if(!user) {
                throw new Error()
            }
            req.user = user
            next()
    } catch(error) {
        res.status(401).send('Not Authorized')
    }
}

//Postman tested 
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({ user, token })
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

exports.logInUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log(user, req.body)
        if(!user || !await bcrypt.compare(req.body.password, user.password)) { 
            throw new Error('User not found')
        } else {
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
        } catch (error) {
            res.status(400).json({ message: 'Hello, Welcome!' })
        } 
}

exports.logOutUser = async (req, res) => {
    try {
        const token = req.header('Authorization').replace
        res.json ({  message: 'Logout Successful' })
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const user = await User.findOne({ _id: req.params.id })
        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        res.json (user)
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne()
        res.json ({  message: 'User Deleted' })
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

exports.showUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.json({ user })
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

exports.showAllUsers = async (req, res) => {
    try {
        const showAllUsers = await User.find({ })
        res.json({ user: showAllUsers })
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}