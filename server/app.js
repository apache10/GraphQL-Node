const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


// connect to mlab database
// @ts-ignore
mongoose.connect("mongodb+srv://DENO:PasswordDeno@cluster0-pv4s6.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening on port 4000");
})