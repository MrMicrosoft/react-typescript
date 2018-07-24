'use strict';
const fs = require('fs');

module.loadTodos = function(){
    return JSON.parse(fs.readFileSync("todos.json"))
}

module.saveTodos = function(todos){
    fs.writeFileSync('todos.json', JSON.stringify(todos));
}
