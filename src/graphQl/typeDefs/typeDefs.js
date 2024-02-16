export const typeDefs = `#graphql
    type User{
        id: ID!
        name: String!
        age: Int!
        email: String!
    }
    input UserInput{
        name: String!
        age: Int!
        email: String!
    }
    type Query{
        users: [User]
        user(id: ID!): User!
    }
    type Mutation{
        createUser(userInput: UserInput): User!
        deleteUser(ID: ID!): Boolean
    }
`;
