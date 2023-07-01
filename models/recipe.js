const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, required: true },
    instructions: { type: String, required: true }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe