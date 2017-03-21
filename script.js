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
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false

		});
	},
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;

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
	}
};

var handlers = {
	addTodo: function () {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function () {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');

		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function (position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}
}

var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {

			var todo = todoList.todos[i];

			var todoLi = document.createElement('li');

			var todoTextWithCompletion = '';
			if (todo.completed) {
				todoTextWithCompletion = '(X)' + todo.todoText;

			} else {
				todoTextWithCompletion = '(O)' + todo.todoText;
			}
			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton())
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: () => {
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setupEeventListeners: () => {

		let todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', (e) => {
			let elementClicked = event.target;

			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setupEeventListeners();