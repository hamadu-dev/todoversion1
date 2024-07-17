import React, { useContext } from 'react';
import todoStore from '../store/todo-items-store';

const NoTodoMessage = () => {
  const todoCtx = useContext(todoStore);
  const {todoList} = todoCtx;
  return (
    <>
        {todoList.length === 0 && <h2>No todo Found!</h2>}
    </>
  )
}

export default NoTodoMessage