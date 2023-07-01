# Title- Recipe's API 
    This is an API for managing recipes using Mongoose, and Express

## Table of contents
1. [#summary](#summary)
2. [#prerequisites](#prerequisites)
3. [#installation](#installation)
4. [#usage](#usage)
5. [#configuration](#usage)
6. [#api-documentation](#api-documentation)
7. [#testing](#testing)
8. [#improvements](#improvements)

## Summary 


## Prerequisites 
Before starting, make sure you have the following installed on your machine: 
    - [Node.js]: you can download and install from the official website: (https://nodejs.org)
    - MongoDB: you can download and install [MongoDB] from the official website: (https://wwww.mongodb.com)

## Installation 
    To install and run this application on your local machine you can follow these instructions step-by-step

1. Clone the repsoitory
        gh repo clone JamieBoeing/unit_2_project

2. in the CMD line of your terminal paste the clone code
3.  $ cd - into recipes
4. npm install 
4. create a new file named .env in the root directory and add the following:    
    mongodb+srv://username:<password>@cluster0.dtaf30w.mongodb.net/?retryWrites=true&w=majorityPORT=3000

 add your private password from mongoDB to a appropriate place <password>, and being careful not to add any special characters
 npm run dev- to start the app in the cmd line
 Postman-Dev free option
 To run this app locally instead of using the dev option you can use an application called postman to check the information coming and going from the server.
 
## Usage
## Configuration
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
 In the future an addition of a front-end user "view" for the application will be added. Then the space where the user can add notes, photos, and share their recipes through other social networks will be linked, as well as a shopping cart for items needed to complete the recipes. Possibly an AI assistant will be added to help order needed items ahead of time for planned meals, and a calendar section. This calendar could be linked to family, and friends to share, update, and collect recipes. Rewards, tokens, and NFT's for possible expansions in the future. 