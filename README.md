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

        code .
* Add the following to the .env

        mongodb+srv://username:<password>@cluster0.dtaf30w.mongodb.net/?retryWrites=true&w=majority
        SECRET_KEY=secret

* replace <password> with the connection string for your MongoDB database

* type the following into the command line to start on local host 3000

        npm run dev

    The api will be available at http://localhost:3000   

# Usage
## UserRoutes
### CreateUser
* Creates a new User 
    * URL:  '/users'
    * Method: POST
    * Authorization required: no

       
            {
                "name": 'New User',
                "username": 'Username',
                "email": 'email@example.com',
                "password": 'password'
            }
### Response
 

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

- **Success**: Returns the newly created user object.
- **Error**: Returns an error message if the creation fails.

### LogInUser
* Logs in a User 
    * URL:  '/users/login'
    * Method: POST
    * Authorization required: yes


        {
            "email": 'email@example.com',
            "password": 'password'
        }

### Response


        {
            "message": "Hello, Login Successful"
        }

- **Success**: Returns a message "Hello, Login Successful"
- **Error**: Returns an error message if login fails.

### LogOutUser
* Logs out a User 
    * URL:  '/users/logout'
    * Method: POST
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |

### Response


        {
            "message": "Logout Successful"
        }

- **Success**: Returns a message "Logout Successful"
- **Error**: Returns an error message if logout fails.

## UpdateUser
* Updates a User 
    * URL:  '/users/:id
    * Method: PUT
    * Authorization required: yes


            {   
                "name": "Upadated User",
                "username": "Username",
                "email": "email@example.com",
                "password": "password"
            }


### Response


        {
            "user": {
                "_id": "64a611cf26a3b4bd",
                "name": "Upadated User",
                "username": "New Username",
                "email": " New email@example.com",
                "password": "$2b$08YEPjddeqQK.1dblSJM41SF/vE.",
                "__v": 0
            },
            "message": "User Updated"
        }

- **Success**: Returns a message "User Updated"
- **Error**: Returns an error message if update fails.

## DeleteUser
* Deletes a User  
    * URL:  '/users/:id'
    * Method: DELETE
    * Authorization required: yes

            {
                "email": 'email@example.com',
                "password": 'password'
            }


#### Response

- **Success**: Returns a message "User Deleted"
- **Error**: Returns an error message if it fails.

## showUser
* Shows a single User  
    * URL:  '/users/:id'
    * Method: GET
    * Authorization required: yes

    #### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |

### Response


        {
            "user": {
                "_id": "64a6117cf263b4bd",
                "name": "User",
                "username": "Username",
                "email": "email@example.com",
                "password": "$2b$08YEPjddeqQK.1dSJLM41SF/vE.",
                "__v": 0
            }
        }

- **Success**: Returns the user object being called by the id
- **Error**: Returns an error message if it fails.

## showAllUsers
* Shows a list of all Users 
    * URL:  '/users/:id'
    * Method: GET
    * Authorization required: yes

#### Response

    {
    "user": [
        {
            "_id": "649a341e6bfc34a0cd",
            "name": "Jamie Boeing",
            "username": "JamieBoeing123",
            "email": "email@email.com",
            "password": "$2b$08$idkJ6o25nEbjxwzphKUghAhCtro560Njr.vvyK",
            "__v": 0
        },
        {
            "_id": "64ae4611d03b80",
            "name": "user1",
            "username": "user1username",
            "email": "user1email@email.com",
            "password": "$2b$08$KfyR7WJmmW2G.sfySRqruGiEg8D5ubYku6W5Gr9q",
            "__v": 0
        },
        {
            "_id": "64a6117cf21b4bd",
            "name": "Upadated User",
            "username": "New Username",
            "email": " New email@example.com",
            "password": "$2b$08$DfwtNZSYEPjddjOzBwmcrOPnMRFE/6d1SF/vE.",
            "__v": 0
        }
        ]
    }

- **Success**: Returns a message "User Deleted"
- **Error**: Returns an error message if login fails.

## Recipe Routes

## CreateRecipe
* Creates a new Recipe 
    * URL:  '/recipes'
    * Method: POST
    * Authorization required: yes

                {
                    "title": "Chocolate Cake",
                    "description": "this is a test recipe",
                    "ingredients": "flour, sugar, cocoa powder, eggs, milk",
                    "category": "dessert",
                    "instructions": "1. Preheat the oven to... (example instructions)"
                }
#### Response

        {
            "title": "Chocolate Cake",
            "description": "this is a test recipe",
            "ingredients": "flour, sugar, cocoa powder, eggs, milk",
            "category": "dessert",
            "instructions": "1. Preheat the oven to... (example instructions)",
            "_id": "64a623caf215946a3b4ca",
                "__v": 0
        }

- **Success**: Returns the newly created recipe object.
- **Error**: Returns an error message if the creation fails.

      


## UpdateRecipes
* Updates a Recipe 
    * URL:  '/recipes/:id
    * Method: PUT
    * Authorization required: yes

    {
        "title": "Chocolate Lava Cake",
        "description": "this is an updated recipe",
        "ingredients": "flour, sugar, cocoa powder, eggs, milk",
        "category": "dessert",
        "instructions": "1. Preheat the oven to... (example instructions)"
    }

    
#### Response
    {
        "_id": "64a62af22d815946a3b4ca",
        "title": "Chocolate Lava Cake",
        "description": "this is an updated recipe",
        "ingredients": "flour, sugar, cocoa powder, eggs, milk",
        "category": "dessert",
        "instructions": "1. Preheat the oven to... (example instructions)",
        "__v": 0
    }

## DeleteRecipe
* Deletes a Recipe 
    * URL:  '/recipes/:id
    * Method: DELETE
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |

#### Response
    {
        "message": "Recipe Deleted"
    }
## ShowRecipe
* Shows a single Recipe 
    * URL:  '/recipes/:id
    * Method: GET
    * Authorization required: yes

    #### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |

#### Response

    {
        "recipes": [
            {
                "_id": "64a623caf22d816a3b4ca",
                "title": "Chocolate Lava Cake",
                "description": "this is an updated recipe",
                "ingredients": "flour, sugar, cocoa powder, eggs, milk",
                "category": "dessert",
                "instructions": "1. Preheat the oven to... (example instructions)",
                "__v": 0
            }
         ]  
    } 
        


## ShowAllRecipes
* Shows a list of all Recipes
    * URL:  '/recipes'
    * Method: GET
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|----------------|-----------|
            |'Authorizaiton | 'Bearer<token>'|           |

#### Response
        {
        "recipes": [
            {
                "_id": "64a6232d815946a3b4ca",
                "title": "Chocolate Lava Cake",
                "description": "this is an updated recipe",
                "ingredients": "flour, sugar, cocoa powder, eggs, milk",
                "category": "dessert",
                "instructions": "1. Preheat the oven to... (example instructions)",
                "__v": 0
            },
            {
                "_id": "64a74fa78c0bc4fc2259",
                "title": "Gluten Free Lasagna",
                "description": "Gluten free traditional style Lasagna",
                "ingredients": "Gluten Free Lasagna noodles, marianara sauce, mozzerella cheese, ground beef or protein replacement like beyond beef, mushrooms",
                "category": "dinner entree",
                "instructions": "1. Preheat the oven to... (example instructions)",
                "__v": 0
            }
        ]
    }

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