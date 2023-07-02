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

## Introduction 
    This is an API for managing recipes using Mongoose, and Express

## Prerequisites 
Before starting, make sure you have the following installed on your machine: 
    - [Node.js]: you can download and install from the official website: (https://nodejs.org)
    - MongoDB: you can download and install [MongoDB] from the official website: (https://wwww.mongodb.com)

## Installation 
To install and run this application on your local machine you can follow these instructions step-by-step

    1. Open the terminal or command prompt
    2. Navigate to the directory where you want to clone the repository
    3. Type the following code into the command line 
        - git clone https://github.com/JamieBoeing/unit_2_project.git
    4. Press Enter 
    5. cd into the project directory
    6. run 
        - npm install
    7. Create a new file named .env in the root directory of the project
    8. Open the .env file in vs code or text editor
    9. Add the following to the .env
        
        - mongodb+srv://username:<password>@cluster0.dtaf30w.mongodb.net/?retryWrites=true&w=majority

        - SECRET_KEY=secret

    10. replace <password> with the connection string for your MongoDB database.

    11. type the following into the command line to start on local host 3000
        - npm run dev

    The api will be available at http://localhost:3000   

## Usage
### User Controllers
#### CreateUser

    CreateUser-'POST/'
        description: creates a new user 
            {
                "name": 'New User',
                "username": 'Username',
                "email": 'email@example.com',
                "password": 'password'
            }

#### logInUser

    logInUser-'POST/login'
        description: logs in a user 
            {
                "email": 'email@example.com',
                "password": 'password'
            }

#### logOutUser

    logOutUser-'POST/logout'
        description: logs out a user 
            {
                "email": 'email@example.com',
                "password": 'password'
            }

#### updateUser

    updateUser-'PUT/:id'
        description: updates a user 
        {
                "name": 'Upadated User',
                "username": 'Username',
                "email": 'email@example.com',
                "password": 'password'
            }

#### deleteUser

    deleteUser-'DELETE/:id'
        description: deletes in a user 
            {
                "email": 'email@example.com',
                "password": 'password'
            }

#### Recipe Controllers
#### CreateRecipe

    CreateRecipe-'POST/'
        description: creates a new Recipe 
            {
                title: 'recipe name',
                description: 'recipe description',
                ingredients: 'ingredients',
                user: user._id,
                category: 'category',
                instructions: 'instructions'
            }


## Routes
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