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

    horse: async (parent, { horseId }) => {
      return Horse.findOne({ _id: horseId });
    },


    lesson: async (parent, { lessonId }) => {
      return Lesson.findOne({ _id: lessonId });
    },

    rider: async (parent, { riderId }) => {
      return Rider.findOne({ _id: riderId });
    },
  },


  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    createHorse: async (parent, { name, count, limit }) => {
      const horse = await Horse.create({ name, count, limit });
      return { horse };
    },

    createInstructor: async (parent, { firstName, lastName }) => {
      const instructor = await Instructor.create({ firstName, lastName });
      return { instructor };
    },

    createRider: async (parent, { firstName, lastName, phone, email }) => {
      const rider = await Rider.create({ firstName, lastName, phone, email });
      return { rider };
    },


    bookLesson: async (parent, { startTime, endTime, duration }) => {
      const lesson = await Lesson.create({ startTime, endTime, duration });
      return { lesson }
    },

    login: async (parent, { email, password }) => {

      const user = await User.findOne({ email });
      console.log("Hey-rro!  Login================")
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


    addRidertoLesson: async (parent, { lessonId, rider }) => {
      return Lesson.findOneAndUpdate(
        { _id: lessonId },
        { $set: { rider: rider } },
        { new: true, runValidators: true }
      );
    },

    addInstructortoLesson: async (parent, { lessonId, instructor }) => {
      return Lesson.findOneAndUpdate(
        { _id: lessonId },
        { $set: { instructor: instructor } },
        { new: true, runValidators: true }
      );
    },

    addHorsetoLesson: async (parent, { lessonId, horse }) => {
      return Lesson.findOneAndUpdate(
        { _id: lessonId },
        { $set: { horse: horse } },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;