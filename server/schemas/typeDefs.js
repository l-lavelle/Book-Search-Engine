const typeDefs = `
  type Query {
    me:User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link:String
  }
  type Auth {
    token: ID!
    user: User
  }
  input BookInput{
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
  type Mutation {
   login(email:String, password:String):Auth
   addUser(username:String, email:String, password:String):Auth
   saveBook(criteria:BookInput):User
   removeBook(bookId: ID):User
  }
`;

module.exports = typeDefs;
