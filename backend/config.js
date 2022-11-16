const Sequelize = require("sequelize");
const config = new Sequelize("taskapp", "root", "buckster12", {dialect: "mariadb"});

module.exports = config;