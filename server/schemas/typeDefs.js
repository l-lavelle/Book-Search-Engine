const typeDefs = `
  type me {
    
  }

  type User {
    _id: ID
    username: String
    email: 
    bookCount: 
    savedBooks
  }

  type authors {
    bookId: 
    authors: 
    description:
    title:
    image:
    link:
  }
  type Auth {
    token:
    user:
  }

  type Mutation {
   
  }
`;

module.exports = typeDefs;
// Query type:me: Which returns a User type.
// Mutation type:

// login: Accepts an email and password as parameters; returns an Auth type.

// addUser: Accepts a username, email, and password as parameters; returns an Auth type.

// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

// removeBook: Accepts a book's bookId as a parameter; returns a User type.
