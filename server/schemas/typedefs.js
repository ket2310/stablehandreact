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

    type Auth {
        token: ID!
        user: User
    }

    type Instructor {
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
        # Set up mutations to handle creating a profile or logging into a profile and return Auth type
        addUser(
            username: String!, 
            email: String!, 
            password: String!
        ): 
        Auth
        login(email: String!, password: String!): Auth
           
        addRider(    
            firstName: String!,
            LastName: String!
            phone: String!,
            email: String!
        ): 
        addLesson(
            startTime: String!,
            endTime: String!,
            duration: Int!,
            rider:  Rider!,
            instructor: Instructor!,
            horse: Horse!
        )
        addInstructor (            
            firstName: String!,
            LastName: String!
        )
        addHorse (
            name: String
            lessonCount: Int
            lessonLimit: Int            
        )
    }
`;

module.exports = typeDefs;

