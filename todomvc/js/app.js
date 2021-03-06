
(function(exports){
	'use strict';
	var filters = {
		all :  function(todos){
			return todos;
		},
		active : function(todos){
			return todos.filter(function(todo){
				return !todo.completed;
			});
		},
		completed : function(todos){
			return todos.filter(function(todo){
				return todo.completed;
			});
		}
	};

	exports.app = new Vue({
		el : ".todoapp",
		data : {
			todos : todoStorage.fetch(),
			newTodo : '',
			editedTodo : null,
			visibility : 'all'
		},
		watch : {
			todos : {
				handler : function(todos){
					todoStorage.save(todos);
				},
				deep : true
			}
		},

		computed : {
			allDone : {
				get : function(){
					return this.remaining === 0;
				},
				set : function(value){
					this.todos.forEach(function(todo){
						todo.completed = value;
					});
				}
			},
			remaining : function(){
				return filters.active(this.todos).length;
			},
			filteredTodos : function(){
				return filters[this.visibility](this.todos);
			}
		},
		methods : {
			addTodo : function(){
				var value = this.newTodo && this.newTodo.trim();
				if(!value){return ;}
				this.todos.push({title : value, completed : false});
				this.newTodo = '';
			},
			removeTodo : function(todo){
				this.todos.$remove(todo);
			},
			editTodo : function(todo){
				this.beforeEditCache = todo.title;
				this.editedTodo = todo;
			},
			doneEdit : function(todo){
				if(!this.editTodo){
					return;
				}
				this.editedTodo = null;
				todo.title = todo.title.trim();
				if(!todo.title){
					this.removeTodo();
				}
			},
			cancelEdit : function(todo){
				this.editedTodo = null;
				todo.title = this.beforeEditCache;
			},
			removeCompleted : function(){
				this.todos = filters.active(this.todos);
			}
		},
		directives : {
			'todo-focus' : function(value){
				if(!value){
					return ;
				}
			}
		}
	});
})(window);