const { ConnectionCheckOutStartedEvent } = require('mongodb');
const mongoose = require('mongoose');

const URL =
  'mongodb+srv://peter_subscription_admin:Sw0rdf1sh123@subscription.q1cvr.mongodb.net/resumebuilder';

mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull');
});
connection.on('error', (error) => {
  console.log(error);
});
