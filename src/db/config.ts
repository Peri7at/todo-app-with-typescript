import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize("todos", "root", "password123", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
  models: [Todos],
  port: 3000,
});

export default connection;
