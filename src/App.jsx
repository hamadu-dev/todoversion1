import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddTodoHandler = (todo, todoDate) => {
    const newTodo = { id: Math.random(), todoName: todo, todoDate: todoDate };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const onDeleteHandler = (id) => {
    console.log(id)
    const newTodoItems = todoList.filter(item => item.id !== id);
    setTodoList(newTodoItems)
  }

  return (
    <>
      <center className="todo-container">
        <div className="container text-center">
          <AppName />
          <div className="items-container">
            <AddTodo onAddTodoHandler={onAddTodoHandler} />
            {todoList.length === 0 && <h2>No Todo Available</h2>}
            <TodoList todoList={todoList} onDeleteHandler={onDeleteHandler} />
          </div>
        </div>
      </center>
      ;
    </>
  );
}

export default App;
