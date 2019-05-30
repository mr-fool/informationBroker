//Importing all the dependencies

const request = require('request-promise');
const fs = require('fs');
const Utils = require('./temproal-js/test/utils');
const Temporal = require('./temporal-js');

const temporal = new Temporal();

temporal.register("user", "email", "password")
.then(() => {
    console.log('User is registered!');
})
.catch((err) => {
    console.log("error!");
})