# About This Project
A simple Express.js app that interacts with a MongoDB database. The goal of the project is to create, manage, and search for users with a given name and retrieve their balance.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
## Features
### The app has the following routes:

- GET /search/:query? - This route retrieves the balance of a user with the given name.
- GET /pay/:query? - This route pays the balance of a user with the given name.
- GET /create/:query? - This route creates a new user with the given name.
- GET /add/:query? - This route adds balance to a user with the given name.
- GET /client.js - This route returns the client-side JavaScript file.
## Installation
- Clone the repository: `git clone https://github.com/gokserpirik/express-mongodb.git`
- Install dependencies: npm install
- Create a .env file with the following MongoDB link. Example: `MONGO_URL=mongodb://localhost:27017/<db-name>`
- Run the app: `npm start`
- Access the app in a web browser at `http://localhost:3000/`