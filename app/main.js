/**
 * Created by henrikholmlund on 2016-01-31.
 */
var app = angular.module('myTodo', []);

var todos = [];


app.controller('todoController', ['$scope', function($scope){
    this.todos = todos;
    this.message = "Hello";
    this.hej = true;




    $scope.addTodo = function(todoName) {

        if(todoName.length == 0)
        {
            return false;
        }

        var newTodo = {};

        newTodo.todoName = todoName;
        newTodo.active = true;
        newTodo.edit = false;
        newTodo.edited = null;
        newTodo.done = null;
        todos.push(newTodo);

    };


    $scope.todoCompleted = function()
    {
        this.todo.active = false;


    };

    $scope.todoDelete = function(todo)
    {
        todos.splice(todos.indexOf(todo),1);
    };

    $scope.todoNotCompleted = function()
    {
        this.todo.active = true;
    };
    $scope.editTodo = function(b)
    {
        console.log(todos[b].edit);

        todos[b].edit = true;
    };
    $scope.editTodoName = function(newTodoName, b)
    {
        todos[b].todoName = newTodoName; 
        todos[b].edit = false;

    };
}]);
