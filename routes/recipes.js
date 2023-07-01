const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipes')
const { auth } = require('../controllers/users')


// POST create a recipe for a user
router.post('/', auth, recipeController.createRecipe)

// PUT update a recipe
router.put('/:id', auth, recipeController.updateRecipe)

// DELETE a recipe
router.delete('/:id', auth, recipeController.deleteRecipe)

// GET show a specific recipe
router.get('/:id', auth, recipeController.showRecipe)

// GET show all recipes
router.get('/', auth, recipeController.showAllRecipes)


module.exports = router