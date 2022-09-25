"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todos_1 = require("../models/todos");
const connection = new sequelize_typescript_1.Sequelize("todos", "root", "password123", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    models: [todos_1.Todos],
    port: 3000,
});
exports.default = connection;
