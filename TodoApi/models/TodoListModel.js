'use strict';
const fs = require('fs');

module.exports.loadTodos = function(){
    return JSON.parse(fs.readFileSync("store/todos.json"))
}

module.exports.saveTodos = function(todos){
    fs.writeFileSync('store/todos.json', JSON.stringify(todos));
}
