import { useState, react } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
import NoTodoMessage from "./components/NoTodoMessage";
import todoStore from "./store/todo-items-store";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddTodoHandler = (todo, todoDate) => {
    const newTodo = { id: Math.random(), todoName: todo, todoDate: todoDate };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const onDeleteHandler = (id) => {
    console.log(id);
    const newTodoItems = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoItems);
  };

  return (
    <>
      <todoStore.Provider value={{
        todoList,
        todoAdd: onAddTodoHandler,
        todoDelete: onDeleteHandler
      }}>
        <center className="todo-container">
          <div className="container text-center">
            <AppName />
            <div className="items-container">
              <AddTodo />
              <NoTodoMessage />
              <TodoList />
            </div>
          </div>
        </center>
      </todoStore.Provider>
    </>
  );
}

export default App;
