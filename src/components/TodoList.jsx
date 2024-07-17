import React, { useContext } from "react";
import SingleItem from "./SingleItem";
import todoStore from "../store/todo-items-store";

const TodoList = () => {
  const todoCtx = useContext(todoStore);
  const {todoList} = todoCtx;
  return (
    <div className="container">
      {todoList.map((todoItem) => (
        <SingleItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
