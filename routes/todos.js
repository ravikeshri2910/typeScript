"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ msg: 'Added todo' });
});
router.put('/todo/:todoId', (req, res) => {
    const tId = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => { todoItem.id == tId; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(201).json({ msg: "Todo is updated" });
    }
    res.status(404).json({ msg: "Todo not found" });
});
router.delete('/todo/:todoId', (req, res) => {
    todos = todos.filter((todoItem) => {
        todoItem.id !== req.params.todoId;
    });
    res.status(201).json({ msg: "Todo is Deleted" });
});
exports.default = router;
