//Importing all the dependencies
require('dotenv').config()
const request = require('request-promise');
const fs = require('fs');
const Utils = require('./temporal-js/test/utils');
const Temporal = require('./temporal-js');

const temporal = new Temporal();

temporal.register(process.env.USERNAME, process.env.EMAIL, process.env.PASSWORD)
.then(() => {
    console.log('User is registered!');
})
.catch((err) => {
    console.log("error!");
})