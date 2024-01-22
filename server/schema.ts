export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String! 
        subjects: [Subject]
    }
    type Subject {
        id: ID!
        subject: String!
        year: String!
        semester: String!
        tasks: [Task]
        user: User!
    }
    type Task {
        id: ID!
        task: String!
        description: String!
        priority: Boolean
        passed: Boolean
        deadline: String
        subject: Subject
    }
    type Query {
        users: [User]
    }
    type Mutation {
        addUser(user: AddUserInput!): User
    }
    input AddUserInput {
        name: String!
        email: String!
    }
`;
