require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const User = require('../models/user')
let mongoServer 

const server = app.listen(8000, () => {
    console.log('Testing on port 8000')
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


    describe('Tests all the endpoints for users', () => {

// POST create user (works)
    test('This endpoint should create a new user', async () => {
        let { token } = await callTokenUser()

        const response = await request(app)
        .post('/users')
        .send({
            name: 'New User',
            username: 'Username',
            email: 'email@example.com',
            password: 'password',
            isLoggedIn: true
        })
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.user.name).toEqual('New User')
        expect(response.body.user.username).toEqual('Username')
        expect(response.body.user.email).toEqual('email@example.com')
    })

// PUT update user (doesnt work)
    test('This endpoint should update a user', async () => {
        let { token } = await callTokenUser()

        const updateUser = new User({
            name: 'User',
            username: 'Username',
            email: 'email@example.com',
            password: 'password',
            isLoggedIn: true
        })
        await updateUser.save()

        const updatedUser = {
            name: 'User updated',
            username: 'Username updated',
            email: 'email@example.com updated',
            password: 'password updated',
            isLoggedIn: true
        }
        const response = await request(app)
        .put(`/users/${updateUser._id}`)
        .send(updatedUser)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(updatedUser.name)
        expect(response.body.username).toEqual(updatedUser.username)
        expect(response.body.email).toEqual(updatedUser.email)
        expect(response.body.isLoggedIn).toEqual(true)
    })

// DELETE delete user (works)
    test('This endpoint should delete a user', async () => {
        let { token } = await callTokenUser()

        const userNew = new User({
            name: 'User',
            username: 'Username',
            email: 'email@example.com',
            password: 'password',
            isLoggedIn: true
        })
        const saveUser = await userNew.save()
        const response = await request(app)
        .delete(`/users/${saveUser._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ message: 'User Deleted' })

        const deleteUser = await User.findById(saveUser._id)
        expect(deleteUser).toBeNull
    })
    
// GET show single user (works)
    test('This endpoint should show a user', async () => {
        let { token } = await callTokenUser()

        const showUser = new User({
            name: 'User',
            username: 'Username',
            email: 'email@example.com',
            password: 'password',
            isLoggedIn: true
        })
        await showUser.save()

        const response = await request(app)
        .get(`/users/${showUser._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.user).toBeInstanceOf(Object)
    })

// GET show all users (works)
    test('This endpoint should show all users', async () => {
        let { token } = await callTokenUser()

        const response = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body.user)).toBe(true)
    })     
})