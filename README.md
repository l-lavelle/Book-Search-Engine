# Book Serach Enigine

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This application uses Google Books API to serach for and save to create reading list. Orginally designed with RESTful API it has beeen refractored to use GraphQL API buit with an Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.

<br>
This application was created with the following criteria:

- Set up Apollo Server to GraphQL queries and mutations to fetch and modify data to replace existing RESTful API
- Modify existing authetication middleware to work with GraphQL API
  -Create Apollo Provider so requests can communicate with an Apollo Server
- Deployed to Heroku with proper build scripts

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Installation

- In order to use the application node.js will need to be installed. <br />
  Node.js Installation: https://nodejs.org/en/download

Node Dependencies:

- Root
  - dotenv
- Client
  - @apollo/client
  - graphql
  - bootstrap
  - jwt-decode
  - react
  - react-bootstrap
  - react-dom
  - react-router-dom
- Server
  - @apollo/server
  - apollo-server-express
  - bcrypt
  - express
  - jsonwebtoken
  - graphql
  - mongoose

## Usage

To run the application locally use npm install to install all node packages from the root directory. Then run a npm run start to bundle and build application and start open on port 3000. Create and account or login in to search for and save books to create a reading list. If your adding or changing code run npm develop to use concurrently and run both the client and server. <br>
Use the link below to go directly to running application deployed on Heroku.
<br>

<!-- Fix image -->

<img src="./client/images/book-search.png" width='700' height='auto'><br>

## License

MIT License

## Contributing

N/A

## Deployed Application

[Heroku Link](https://warm-stream-05414-f1d5d672d6d0.herokuapp.com)
