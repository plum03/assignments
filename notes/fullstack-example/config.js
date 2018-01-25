// one file for all configuration variables


require('dotenv').config();




module.exports = {
    port: process.env.PORT
}








// Notes: 
// env.PORT => environment variable for the "PORT" placeholder

// .env environment variables will be defined in the .env file

// use npm package for processing vars from .env

