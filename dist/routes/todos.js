"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post("/", todos_1.createToDo);
router.get("/", todos_1.getAllToDo);
router.get("/:id", todos_1.getTodoById);
router.put("/:id", todos_1.updateTodo);
router.delete("/:id", todos_1.deleteToDo);
exports.default = router;