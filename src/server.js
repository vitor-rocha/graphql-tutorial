import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import schema from './schema'

const server = express()

const port = 8888

server.listen(port, () => { console.log(`Server started on port ${port}`) })

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

mongoose.connect('mongodb://localhost/graphqlTutorial');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connection to MongoDB was successfull');
})
