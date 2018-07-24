const TodoListModel = require('../models/TodoListModel')

exports.getAll = function (req, res){
    res.send({success: true, data: TodoListModel.loadTodos()});
};
/*
exports.getTodo = function (req, res){
    User.find({username: { $regex: req.params.username}}, function(err,user){
        if(err){
            res.send({success: false, err:JSON.stringify(err)});
        }else res.send({success: true, data: user});
    });
};
exports.addTodo = function (req, res){
    User.find({username: { $regex: req.params.username}}, function(err,user){
        if(err){
            res.send({success: false, err:JSON.stringify(err)});
        }else res.send({success: true, data: user});
    });
};
exports.updateTodo = function (req, res){
    User.find({username: { $regex: req.params.username}}, function(err,user){
        if(err){
            res.send({success: false, err:JSON.stringify(err)});
        }else res.send({success: true, data: user});
    });
};*/