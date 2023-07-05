require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const Recipe = require('../models/recipe')
const User = require('../models/user')
let mongoServer 



const server = app.listen(8080, () => {
    console.log('Testing on port 8080')
})

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})
afterAll(async () => {
    await mongoose.connection.close()
        mongoServer.stop()
        server.close()
    })
    


// // function call token and user 
const callTokenUser = async () => {
    const user = new User({
        name: 'Jamie Boeing',
        username: "JamiesUserName",
        email: 'Jamies@email.com',
        password: 'password123',
        isLoggedIn: true
    })
    await user.save()
    const token = await user.generateAuthToken()
    return { user, token }
}



    describe('Tests all the endpoints for recipes', () => {
   

// POST create recipe (works)
    test('This endpoint should create a new recipe', async () => {
    let { user, token } = await callTokenUser()
   
        const response = await request(app)
            .post('/recipes')
            .send({
                title: 'recipe name',
                description: 'recipe description',
                ingredients: 'ingredients',
                user: user._id,
                category: 'category',
                instructions: 'instructions'
            })
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toBe(200)
            expect(response.body.title).toEqual('recipe name')
            expect(response.body.description).toEqual('recipe description')
            expect(response.body.ingredients).toEqual('ingredients')
            expect(response.body.category).toEqual('category',)
            expect(response.body.instructions).toEqual('instructions')
    })

// // // PUT update recipe (works)
    test('This endpoint should update a recipe', async () => {
       let { user, token } = await callTokenUser()
    
        const newRecipe = new Recipe({
            title: 'recipe name',
            description: 'recipe description',
            ingredients: 'ingredients',
            user: user._id,
            category: 'category',
            instructions: 'instructions'
        })
        await newRecipe.save()
  
        const updateRecipe = {
            title: 'recipe name updated',
            description: 'recipe description updated',
            ingredients: 'ingredients updated',
            category: 'category updated',
            instructions: 'instructions updated'
        }
        const response = await request(app)
        .put(`/recipes/${newRecipe._id}`)
        .send(updateRecipe)
        .set('Authorization', `Bearer ${token}`)
      
        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual(updateRecipe.title)
        expect(response.body.description).toEqual(updateRecipe.description)
        expect(response.body.ingredients).toEqual(updateRecipe.ingredients)
        expect(response.body.category).toEqual(updateRecipe.category)
        expect(response.body.instructions).toEqual(updateRecipe.instructions)
    })

// // // DELETE delete recipe (works)
    test('This endpoint should delete a recipe', async () => {
        let { user, token } = await callTokenUser()
        
        const recipe = new Recipe({
            title: 'recipe name',
            description: 'recipe description',
            ingredients: 'ingredients',
            user: user._id,
            category: 'category',
            instructions: 'instructions'
        })
        const saveRecipe = await recipe.save()

        const response = await request(app)
        .delete(`/recipes/${saveRecipe._id}`)
        .set('Authorization', `Bearer ${token}`)
        


        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ message: 'Recipe Deleted' })

        const deleteRecipe = await Recipe.findById(saveRecipe._id)
        expect(deleteRecipe).tobeNull
    })

// // // // GET show single recipe (works)
    test('This endpoint should show a recipe', async () => {
        let { user, token } = await callTokenUser()
        const recipe = new Recipe({
            title: 'recipe name',
            description: 'recipe description',
            ingredients: 'ingredients',
            user: user._id,
            category: 'category',
            instructions: 'instructions'
        })
        await recipe.save()

        const response = await request(app)
        .get(`/recipes/${recipe._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

// // // GET show all recipes (works)
    test('This endpoint should show all recipes', async () => {
        let { user, token } = await callTokenUser()

        const response = await request(app)
        .get('/recipes')
        .set('Authorization', `Bearer ${token}`)


        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body.recipes)).toBe(true)
        
    })
})