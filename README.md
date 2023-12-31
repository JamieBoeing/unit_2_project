# Title- Recipe's API 
    

## Table of contents
* [#introduction](#introduction)
* [#wireframe](#wireframe)
* [#prerequisites](#prerequisites)
* [#technologies-used](#technologies-used)
* [#installation](#installation)
* [#api-documentation](#api-documentation)
* [#user-routes](#user-routes)
* [#recipe-routes](#recipe-routes)
* [#erd](#erd)
* [#testing](#testing)
* [#improvements](#improvements)

# Introduction 
This is an API for managing recipes using Mongoose, and Express
## Wireframe
[#wireframe](./images/wireframe.png)
# Prerequisites 
Before starting, make sure you have the following installed on your machine: 
* [Node.js]: you can download and install from the official website: (https://nodejs.org)
* MongoDB: you can download and install [MongoDB] from the official website: (https://wwww.mongodb.com)




## Technologies Used
* Node.js: A JavaScript runtime environment that executes server-side code.
* Express.js: A fast and minimalist web application framework for Node.js.
* MongoDB: A popular NoSQL database used for data storage and retrieval.
* Mongoose: An elegant MongoDB object modeling for Node.js.
* bcrypt: A library for hashing passwords and securing user credentials.
* jsonwebtoken: A library for creating and validating JSON Web Tokens (JWT) for authentication and authorization.
* dotenv: A zero-dependency module for loading environment variables from a .env file.
* morgan: A middleware for logging HTTP requests in Node.js.
* nodemon: A utility that automatically restarts the Node.js server during development for improved workflow.
* Jest: A JavaScript testing framework with a focus on simplicity and performance.
* Artillery: An open-source load testing tool used for performance testing and benchmarking.
* mongodb-memory-server: A package that spins up an in-memory MongoDB server for testing purposes.
* supertest: A library for testing Node.js HTTP servers and making assertions about HTTP responses.

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

        MONGO_URI=mongodb+srv://username:<password>@cluster0.dtaf30w.mongodb.net/?retryWrites=true&w=majority
        SECRET_KEY=secret

* replace <password> with the connection string for your MongoDB database

* type the following into the command line to start on local host 3000

        npm run dev

    The api will be available at http://localhost:3000  

* to start the program without using the dev mode type 
    
    npm run start

# API-Documentation
## User Routes
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

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |


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
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

#### Headers
    |Key            |Value           |Description
    |---------------|-----------------|-----------|
    |'Authorization'| 'Bearer <token>'|           |



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

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

            {
                "email": 'email@example.com',
                "password": 'password'
            }


#### Response

            {
                "message": "User Deleted"
            }

- **Success**: Returns a message "User Deleted"
- **Error**: Returns an error message if it fails.

## showUser
* Shows a single User  
    * URL:  '/users/:id'
    * Method: GET
    * Authorization required: yes

    #### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

- **Success**: Returns a message a list of all the user objects 
- **Error**: Returns an error message if it fails.

## Recipe Routes

### CreateRecipe
* Creates a new Recipe 
    * URL:  '/recipes'
    * Method: POST
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

      


### UpdateRecipes
* Updates a Recipe 
    * URL:  '/recipes/:id
    * Method: PUT
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

- **Success**: Returns the newly updated recipe object.
- **Error**: Returns an error message if the update fails.

### DeleteRecipe
* Deletes a Recipe 
    * URL:  '/recipes/:id
    * Method: DELETE
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

#### Response
            {
                "message": "Recipe Deleted"
            }

- **Success**: Returns a message "Recipe Deleted"
- **Error**: Returns an error message if delete fails.

### ShowRecipe
* Shows a single Recipe 
    * URL:  '/recipes/:id
    * Method: GET
    * Authorization required: yes

    #### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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
        

- **Success**: Returns a single recipe object called upon
- **Error**: Returns an error message if it fails.

### ShowAllRecipes
* Shows a list of all Recipes
    * URL:  '/recipes'
    * Method: GET
    * Authorization required: yes

#### Headers
            |Key            |Value           |Description
            |---------------|-----------------|-----------|
            |'Authorization'| 'Bearer <token>'|           |

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

- **Success**: Returns a list of all recipe objects 
- **Error**: Returns an error message if it fails.


### ERD
[#erd](./images/erd.png)

## Testing
### Jest Test Results
       Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        1.403 s
Ran all test suites.


To run the testing suites type in the cmd line

    npm run test





### Artillery.yml Testing 
Tests two endpoints through Artillery.yml

This test is a Negative test 
    A negative test, is designed to validate how a system behaves under unexpected conditions. It intentionally triggers errors, edge cases, or invalid inputs to verify if the system handles them appropriately.
    Negative testing helps uncover vulnerabilities, weaknesses, and potential issues in your system, allowing you to improve its robustness and resilience. It ensures that the system gracefully handles unexpected situations and provides appropriate error handling and feedback to users



    scenarios:
    - name: "Create Recipe"
    - flow:
        - post:
            url: "/recipes"        
            json: 
            title: "Testing a recipe"
            description: "Testing a recipe"
            completed: false

    - name: "Get Users"
    - flow:
        - get:
            url: "/users"     
            json: 
            title: "Testing Users"
            description: "Testing a User"
            completed: false


to run the Artillery Load testing type in the cmd line

    npm run load
 
## Improvements 
 In the future an addition of a front-end user "view" for the application will be added. An Option where the user can add notes, photos, and share their recipes through other social networks will be linked, as well as a shopping cart for items needed to complete the recipes. Possibly an AI assistant will be added to help order needed items ahead of time for planned meals, and a calendar section. This calendar could be linked to family, and friends to share, update, and collect recipes. Rewards, tokens, and NFT's for possible expansions in the future. 