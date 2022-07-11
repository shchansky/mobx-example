import React from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../store";

export const Todo = observer(() => {

 

  return (
    <div>
      {todoStore.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {todoStore.completeTodo(todo.id)}}
          />
          {todo.title}
          <button onClick={()=>{todoStore.removeTodo(todo.id)}}> Dell todo </button>
        </div>
      ))}
    </div>
  );
});
