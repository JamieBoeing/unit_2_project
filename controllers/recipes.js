const Recipe = require("../models/recipe")
const User = require('../models/user')

// POST Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body)
        await recipe.save()
        res.json({ recipe })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// PUT Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const recipe = await Recipe.findOne({ _id: req.params.id })
        updates.forEach(update => recipe[update] = req.body[update])
        await recipe.save()
        res.json(recipe)  
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const deleteRecipe = await Recipe.deleteOne({ _id: req.params.id })
        res.json({ message: 'Recipe Deleted'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// GET Show an individual recipe
exports.showRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ _id: req.params.id })
        res.json(recipe)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// GET Show a list of recipes
exports.showAllRecipes = async (req, res) => {
    try {
        const showRecipes = await Recipe.find({ })
        res.json({ recipes: showRecipes })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}