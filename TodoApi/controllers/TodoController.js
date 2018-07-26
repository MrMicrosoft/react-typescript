const TodoListModel = require('../models/TodoListModel')

exports.getAll = function (req, res){
    res.send({success: true, data: TodoListModel.loadTodos()})
};

exports.getTodo = function (req, res){
    var todo = TodoListModel.loadTodos().filter((todo)=>{
        return todo.id == req.params.id;
    })[0];
    res.send({success: true, data: todo});
};
exports.addTodo = function (req, res){
    var todos = TodoListModel.loadTodos();
    var newIndex = todos[todos.length-1].id+1;

    var todo = {disc: req.body.disc, completed: req.body.completed, id: newIndex}
    todos.push(todo);
    
    TodoListModel.saveTodos(todos);

    res.send({success: true, data: todo});
};
exports.updateTodo = function (req, res){
    var todos = TodoListModel.loadTodos();

    var objIndex = todos.findIndex(obj => obj.id == req.params.id);
    todos[objIndex].disc = req.body.disc;
    todos[objIndex].completed = req.body.completed;

    TodoListModel.saveTodos(todos);
    res.send({success: true, data: todos[objIndex]});
};