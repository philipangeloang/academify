export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String! 
        subjects: [Subject!]
    }
    type Subject {
        id: ID!
        subject: String!
        year: String!
        semester: String!
        tasks: [Task!]
        user: User! #Each subject has a corresponding creator user
    }
    type Task {
        id: ID!
        task: String!
        description: String!
        priority: Boolean
        passed: Boolean
        deadline: String
        subject: Subject! #Each task is directly under an individual subject
        user: User! #Each task has a corresponding creator user
    }
    type Query {
        users: [User]
        user(id: ID!): User
        subjects: [Subject]
        subject(id: ID!): Subject
        tasks: [Task]
        task(id: ID!): Task
    }
    type Mutation {
        addUser(user: AddUserInput!): User
    }

    # Input Types
    input AddUserInput {
        name: String!
        email: String!
    }
`;
