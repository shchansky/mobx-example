import { makeAutoObservable } from "mobx";
// import { action, makeObservable, observable, computed } from "mobx";
import { v4 } from "uuid";

class Todo {
  todos: any[] = [
    { id: v4(), title: "выучи mobx", completed: false },
    { id: v4(), title: "выучи redux", completed: false },
    { id: v4(), title: "Еще что-то сделай", completed: false },
    {
      id: v4(),
      title: "Глубокое отслеживание при измении внутреннего поля",
      completed: false,
      internallyField: { number: 99, caption: "internallyField" },
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Глубокое отсеживание изменений внутренних полей
   * типа internallyField , вызывающее перерендер компонента
   */
  // constructor() {
  //   makeAutoObservable(this, {}, { deep: true });
  // }

  /** Пример как следить за полями с makeAutoObservable,
   * однако, для детальной настройки лучше применять makeObservable
   */
  // constructor() {
  //   makeAutoObservable(this, {todos: observable, addTodo: action});
  // }

  /** Альтернативный участок кода с makeObservable*/
  // constructor() {
  //   makeObservable(this, {
  //     todos: observable,
  //     addTodo: action,
  //     removeTodo: action,
  //     completeTodo: action,
  //   });
  // }

  addTodo(todo: any) {
    this.todos.push(todo);
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  fetchTodo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.todos = [...this.todos, ...json]));
  }
}

export const todoStore = new Todo();
