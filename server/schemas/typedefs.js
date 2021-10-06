const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Lesson {
        _id: ID
        startTime: String
        endTime: String
        duration: Int
        rider:  Rider
        instructor: Instructor
        horse: Horse
    }

    type User {
        _id: ID!
        username: String
        email: String
        password: String
    }

    type Horse{
        _id: ID!
        name: String
        lessonCount: Int
        lessonLimit: Int        
    }    

    input HorseData {
        _id: ID!
        name: String
        lessonCount: Int
        lessonLimit: Int  
    }

    type Auth {
        token: ID!
        user: User
    }

    type Instructor {
        _id: ID!
        firstName: String
        LastName: String
    }

    input InstructorData {
        _id: ID!
        firstName: String
        LastName: String
    }
    type Rider {
        _id: ID!
        firstName: String
        LastName: String
        phone: String
        email: String
    }
  
    input RiderData {
        _id: ID
        firstName: String
        LastName: String
        phone: String
        email: String
    }
    
    type Query {
        users: [User]
        me: User
        user(_id: ID!): User
        instructor(_id: ID!): Instructor
        horse(_id: ID!): Horse
        rider(_id: ID!): Rider
        lesson(_id: ID!): Lesson        
    }
 
    type Mutation {
        createUser(
            username: String!, 
            email: String!, 
            password: String!
        ): 
        Auth
        login(email: String!, password: String!): Auth

        createRider (
            firstName: String!,
            LastName: String!
            phone: String!,
            email: String!
        ): Rider

        createInstructor(
            firstName: String!,
            LastName: String!
        ): Instructor

        createHorse(
            name: String
            lessonCount: Int
            lessonLimit: Int            
        ): Horse

        bookLesson(
            startTime: String!,
            endTime: String!,
            duration: Int!            
        ): Lesson
        
        
        addRidertoLesson( 
            rider: RiderData
        ): Lesson

        addHorsetoLesson( 
            horse: HorseData
        ): Lesson

        addInstructortoLesson( 
            instructor: InstructorData
        ): Lesson



    }
`;

module.exports = typeDefs;

