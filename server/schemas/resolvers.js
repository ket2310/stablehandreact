const { User, Instructor, Horse, Rider, Lesson } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { ObjectId } = require('mongodb');


const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    instructor: async (parent, { instructorId }) => {
      return Instructor.findOne({ _id: instructorId });
    },

    horse: async (parent,{ horseId }) => {
      return Horse.findOne({ _id: horseId });
    },


    lesson: async (parent,{ lessonId }) => {
      return Lesson.findOne({ _id: lessonId });
    },

    rider: async (parent,{ riderId }) => {
      return Rider.findOne({ _id: riderId });
    },
  },


  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      
      return { token, user };
    },

    addHorse: async (parent, { name, count, limit }) => {
      const horse = await Horse.create({ name, count, limit });
       return { horse };
    },

    login: async (parent, { email, password }) => {
  
      const user = await User.findOne({ email });
      console.log ("Hey-rro!  Login================")
      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      console.log("getting token")
      const token = signToken(user);
      if (token)
      console.log(token)
      return { token, user };
    },
  },
};

module.exports = resolvers;
