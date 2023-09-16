"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var body = req.body;
    var newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(404).json({ message: 'todo is Added', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', function (req, res, next) {
    var params = req.body;
    var tid = req.params.todoId;
    var body = req.body;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id == tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated todos', todos: todos });
    }
    res.status(404).json({ message: 'could not find todo for this id' });
});
router.delete('/todo/:todoId', function (req, res, next) {
    var params = req.body;
    todos = todos.filter(function (todoItem) { return todoItem.id !== params.todoId; });
    res.status(404).json({ message: 'Deleted Todo', todos: todos });
});
exports.default = router;
