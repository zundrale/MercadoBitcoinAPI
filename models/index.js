const databasebConfig = require("../config/databaseConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(databasebConfig.database, databasebConfig.username, databasebConfig.password, {
  host: databasebConfig.host,
  dialect: databasebConfig.dialect,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Orders = require("./ordersModel.js")(sequelize, Sequelize);

module.exports = db;
