// Define the query and mutation functionality to work with the Mongoose models.

const { Book, User } = require("../models");
const { signToken, AuthenicationError } = require("../utils/auth");

const resolvers = {
  // Query: {
  //   //get a single user
  // },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenicationError;
      }

      const passwordCheck = await user.isCorrectPassword(password);

      if (!passwordCheck) {
        throw AuthenicationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    // saveBook: async (parent, args) => {
    //   return User.findOneAndUpdate();
    // },
    // removeBook: async (parent, { bookId }) => {
    //   return User.findOneAndUpdate({});
    // },
  },
};

module.exports = resolvers;
