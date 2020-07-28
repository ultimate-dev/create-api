'use strict';
const Sequelize = require('sequelize');

/**
 * Sequelize Config
 */;
const env = process.env.NODE_ENV || 'development';
const config = require('./configs/db.json')[env];

/**
 * Models Object
 */
const db = {};

/** 
 * Sequelize Generate
*/

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);

} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/**
 * Models İmporting
 */

db.Test = sequelize.import(__dirname + '/models/test.js');


//------
console.log("------------------- MODELS ---------------------".black.bgCyan);
console.log(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
