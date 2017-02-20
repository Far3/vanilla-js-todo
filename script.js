var todoList = {
	todos: [
		{
			todoText: 'cook breakfast',
			completed: false
		},
		{
			todoText: 'shower',
			completed: false
		},
		{
			todoText: 'setup github repo',
			completed: true
		},
		{
			todoText: 'complete v5',
			completed: true
		}
	],
	displayTodos: function () {

		this.todos.length === 0 ?
			console.log('Your todo list is empty')
			:
			console.log('My Todo Items: ');
		for (var i = 0; i < this.todos.length; i++) {

			this.todos[i].completed ?
				console.info('(X)', this.todos[i].todoText)
				:
				console.info('( )', this.todos[i].todoText);
		}
	},
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false

		});
		this.displayTodos();
	},
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();

	},
	toggleAll: function () {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//Need to find the amount of completed todo items
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true)
				completedTodos++;
		}

		//If everything is true, make everything false
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			//Case 2: Otherwise, make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});