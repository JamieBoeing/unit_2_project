const express = require('express')
const morgan = require('morgan')
const recipeRoutes = require('./routes/recipes')
const userRoutes = require('./routes/users')


const app = express()


app.use(express.json())
app.use(morgan('combined'))
app.use('/recipes', recipeRoutes)
app.use('/users', userRoutes)



module.exports = app