module.exports = function(app) {
    var todoController = require('../controllers/TodoController');

    app.route('/todo')
        .get(todoController.getAll)
        .post(todoController.addTodo);

    app.route('/todo/:id')
        .get(todoController.getTodo)
        .post(todoController.updateTodo);
};