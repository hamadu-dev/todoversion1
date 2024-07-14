import React from "react";
import SingleItem from "./SingleItem";

const TodoList = ({ todoList, onDeleteHandler }) => {
  return (
    <div className="container">
      {todoList.map((todoItem) => (
        <SingleItem key={todoItem.id} todoItem={todoItem} onDeleteHandler={onDeleteHandler}/>
      ))}
    </div>
  );
};

export default TodoList;
