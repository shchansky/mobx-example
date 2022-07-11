import { action, makeAutoObservable, observable } from "mobx";

type Todos = {
  id: number;
  title: string;
  completed: boolean;
};

class Todo {
  todos: Todos[] = [
    { id: 1, title: "выучи mobx", completed: false },
    { id: 2, title: "выучи redux", completed: false },
    { id: 3, title: "Еще что-то сделай", completed: false },
  ];

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      completeTodo: action,
    });
  }

  /*#region Actions (функции) для изменения состояния count*/
  addTodo(todo: Todos) {
    this.todos.push(todo);
    console.log("add");
  }

  removeTodo(id: Todos["id"]) {
    this.todos.filter((todo) => todo.id !== id);
    console.log("remove");
  }

  completeTodo(id: Todos["id"]) {
    console.log("complet");

    this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  /* #endregion */
}

export const todoStore = new Todo();
