var colors = require('colors');
const server = require('./configs/server.json')
const app = require("./app")
const db = require("./db")
/**
 * Server Port
 */
const PORT = process.env.PORT || server.port
/**
 * Creating Server && Listening Server
 */


db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log("------------------------------------------------".black.bgGreen);
        console.log(`------------ SERVER STARTED => ${PORT} ------------`.black.bgGreen);
        console.log("------------------------------------------------".black.bgGreen);
    })
}).catch((err) => {
    console.log("------------------------------------------------".black.bgRed);
    console.log("------------- SERVER FAILED START --------------".black.bgRed);
    console.log("------------------------------------------------".black.bgRed);
})
