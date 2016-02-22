describe("todoController", function() {
    var $scope;
    var controller;

    beforeEach(function() {

        module("myTodo");

        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("todoController", {$scope: $scope});

        });

    });

    //två test bara för att fatta...

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });

    it('hej returns true ', function () {
     expect(controller.hej).toBe(true);
     });

    it('should add arbitrary text to the todoName object in the todos array ', function () {
        $scope.addTodo("hej");
        expect(controller.todos[0].todoName).toEqual("hej");
    });

    it('should mark a new task as active', function(){
        $scope.addTodo("hej");
        expect(controller.todos[0].active).toBe(true);

    });

    it('should remove a task from the todos array', function(){
        var numOfTasks = controller.todos.length;
        $scope.todoDelete([0]);
        expect(controller.todos.length).toBe(numOfTasks -1);
    });

    it('should edit the first tasks name to be "hej då"', function(){

        var numOfTasks = controller.todos.length;

        controller.todos[0].name = "hej då";

        expect(controller.todos[0].name).toBe("hej då");

    });







});