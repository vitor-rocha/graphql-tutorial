import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Author {
        age: Int
        name: String
        books: [String]
    }

    type Query {
        author: [Author]
    }
`

const schema = makeExecutableSchema({ typeDefs })

addMockFunctionsToSchema({ schema })

export default schema
