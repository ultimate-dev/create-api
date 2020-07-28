const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const varifyToken = require('./middlewares/verify-token')
const server = require('./configs/server.json')

/**
 * Creating Express App
 */
const app = express()

/**
 * Express App Using
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))

/**
 * Secret Key App Set
 */
app.set("secret_key", server["secret-key"])

/**
 * Middlewares
 */
app.use("/api", varifyToken)

/**
 * Routes
 */
const test = require("./routes/test.js");
app.use("/test", test);




//
module.exports = app;