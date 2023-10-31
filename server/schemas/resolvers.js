// Define the query and mutation functionality to work with the Mongoose models.

const { Book, User } = require("../models");
const { signToken, AuthenicationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      // console.log("context", context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenicationError;
    },
  },

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
    saveBook: async (parent, { criteria }, context) => {
      // console.log("context", context);
      // console.log("user context", context.user);
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: criteria } },
          { new: true, runValidators: true }
        );
      }
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
