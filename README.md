# Title- Recipe's API 
    

## Table of contents
1. [#introduction](#introduction)
2. [#prerequisites](#prerequisites)
3. [#installation](#installation)
4. [#usage](#usage)
5. [#configuration](#usage)
6. [#api-documentation](#api-documentation)
7. [#testing](#testing)
8. [#improvements](#improvements)

# Introduction 
This is an API for managing recipes using Mongoose, and Express

# Prerequisites 
Before starting, make sure you have the following installed on your machine: 
* [Node.js]: you can download and install from the official website: (https://nodejs.org)
* MongoDB: you can download and install [MongoDB] from the official website: (https://wwww.mongodb.com)

# Installation 
To install and run this application on your local machine you can follow these instructions step-by-step

* Open the terminal or command prompt
* Navigate to the directory where you want to clone the repository
* Type the following code into the command line 
        
        git clone https://github.com/JamieBoeing/unit_2_project.git

* Press Enter 
* cd into the project directory

        cd unit_2_project

* run 

        npm install

* Create a new file named .env in the root directory of the project

        touch .env
        
* Open the .env file in vs code or text editor
* Add the following to the .env
        
        - mongodb+srv://username:<password>@cluster0.dtaf30w.mongodb.net/?retryWrites=true&w=majority

        - SECRET_KEY=secret

* replace <password> with the connection string for your MongoDB database

* type the following into the command line to start on local host 3000
        - npm run dev

    The api will be available at http://localhost:3000   

# Usage
## UserRoutes
### CreateUser
* Creates a new User 
 description: creates a new user 
    * URL:  '/users'
    * method: POST

       
            {
                "name": 'New User',
                "username": 'Username',
                "email": 'email@example.com',
                "password": 'password'
            }
### Response
- **Success**: Returns the newly created user object.
- **Error**: Returns an error message if the creation fails. 

        {
            "user": {
                "name": "name",
                "username": "username", 
                "email": "email@email.com",
                "password": 'password',
                "_id": "647cf22d8159bd",
                "__v": 0
            },
            "token": "eyE3Y2YyMmQ4MTU5NDZhM24sj5LlwiBuDmqNVQ"
        }

### LogInUser
* Logs in a User 
description: Logs in a user
    * URL:  '/users/login'
    * method: POST

            {
                "email": 'email@example.com',
                "password": 'password'
            }
### Response
- **Success**: Returns a message "Hello"
- **Error**: Returns an error message if login fails.

        {
            "message": "Hello"
        }


### logOutUser
* Logs out a User 
description: logs out a user 
    * URL:  '/users/logout'
    * method: POST
#### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |
### Response
- **Success**: Returns a message "Logout Successful"
- **Error**: Returns an error message if logout fails.

        {
            "message": "Logout Successful"
        }

## updateUser
* Updates a User 
description: Updates a user 
    * URL:  '/users/:id
    * method: PUT

        {
                "name": "Upadated User",
                "username": "Username",
                "email": "email@example.com",
                "password": "password"
            }
### Response
- **Success**: Returns a message "Logout Successful"
- **Error**: Returns an error message if logout fails.

    {
        "user": {
            "_id": "64a6117cf26a3b4bd",
            "name": "Upadated User",
            "username": "New Username",
            "email": " New email@example.com",
            "password": "$2b$08YEPjddeqQK.1dblSJLM41SF/vE.",
            "__v": 0
        },
        "message": "User Updated"
    }

## deleteUser
* Deletes a User 
description: Deletes a user 
    * URL:  '/users/:id'
    * method: DELETE

            {
                "email": 'email@example.com',
                "password": 'password'
            }

- **Success**: Returns a message "Hello"
- **Error**: Returns an error message if login fails.
#### Response
#### showUser
#### showAllUsers
## Recipe Routes

#### CreateRecipe
        * Creates a new Recipe 
            * URL:  '/recipes'
            * method: POST
                {
                    "title": "Chocolate Cake",
                    "description": "this is a test recipe",
                    "ingredients": "flour, sugar, cocoa powder, eggs, milk",
                    "category": "dessert",
                    "instructions": "1. Preheat the oven to... (example instructions)"
                }
#### Response

- **Success**: Returns the newly created recipe object.
- **Error**: Returns an error message if the creation fails.

       response example:
        {
            "title": "Chocolate Cake",
            "description": "this is a test recipe",
            "ingredients": "flour, sugar, cocoa powder, eggs, milk",
            "category": "dessert",
            "instructions": "1. Preheat the oven to... (example instructions)",
            "_id": "64a623caf22d815946a3b4ca",
                "__v": 0
        }

// PUT Update a recipe
// DELETE a recipe
// GET Show an individual recipe
// GET Show a list of recipes

## API-Documentation


## Testing
### Jest Test Results
        - Test Suites: 2 passed, 2 total
    Tests:       10 passed, 10 total
    Snapshots:   0 total
    Time:        1.118 s
    Ran all test suites.
    ::ffff:127.0.0.1 - - [30/Jun/2023:01:21:04 +0000] "POST /recipes HTTP/1.1" 200 224 "-" "-"
    ::ffff:127.0.0.1 - - [30/Jun/2023:01:21:04 +0000] "PUT /recipes/649e2e00390278aa29790945 HTTP/1.1" 200 253 "-" "-"
    ::ffff:127.0.0.1 - - [30/Jun/2023:01:21:04 +0000] "DELETE /recipes/649e2e00390278aa2979094c HTTP/1.1" 200 28 "-" "-"
    ::ffff:127.0.0.1 - - [30/Jun/2023:01:21:04 +0000] "GET /recipes/649e2e00390278aa29790953 HTTP/1.1" 200 213 "-" "-"
    ::ffff:127.0.0.1 - - [30/Jun/2023:01:21:04 +0000] "GET /recipes HTTP/1.1" 200 695 "-" "-"



### Artillery.yml Testing 
        > recipes@1.0.0 load
    > artillery run artillery.yml

    Telemetry is on. Learn more: https://artillery.io/docs/resources/core/telemetry.html
    Started phase 0, duration: 60s @ 20:54:04(-0500) 2023-06-29
    Report @ 20:54:14(-0500) 2023-06-29
    Elapsed time: 10 seconds
    Scenarios launched:  199
    Scenarios completed: 0
    Requests completed:  0
    Mean response/sec: 20
    Response time (msec):
        min: NaN
        max: NaN
        median: NaN
        p95: NaN
        p99: NaN
    Errors:
        ECONNREFUSED: 199

    Report @ 20:54:24(-0500) 2023-06-29
    Elapsed time: 20 seconds
    Scenarios launched:  200
    Scenarios completed: 0
    Requests completed:  0
    Mean response/sec: 20
    Response time (msec):
        min: NaN
        max: NaN
        median: NaN
        p95: NaN
        p99: NaN
    Errors:
        ECONNREFUSED: 200

    Report @ 20:54:34(-0500) 2023-06-29
    Elapsed time: 30 seconds
    Scenarios launched:  200
    Scenarios completed: 0
    Requests completed:  0
    Mean response/sec: 20
    Response time (msec):
        min: NaN
        max: NaN
        median: NaN
        p95: NaN
        p99: NaN
    Errors:
        ECONNREFUSED: 200

 
## Improvements 
 In the future an addition of a front-end user "view" for the application will be added. An Option where the user can add notes, photos, and share their recipes through other social networks will be linked, as well as a shopping cart for items needed to complete the recipes. Possibly an AI assistant will be added to help order needed items ahead of time for planned meals, and a calendar section. This calendar could be linked to family, and friends to share, update, and collect recipes. Rewards, tokens, and NFT's for possible expansions in the future. 