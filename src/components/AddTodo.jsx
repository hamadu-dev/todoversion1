import React, { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import todoStore from "../store/todo-items-store";

const AddTodo = ({onAddTodoHandler}) => {
  const todoCtx = useContext(todoStore);
  // const [todo, setTodo] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todo = useRef();
  const todoDate = useRef();

  return (
    <div className="container">
      <div className={`${styles["kg-row"]} row`}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todo}
            // value={todo}
            // onChange={(event) => {
            //   setTodo(event.target.value);
            //   test.current += 1;
            // }}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDate}
            // value={todoDate}
            // onChange={(event) => {
            //   setTodoDate(event.target.value);
            // }}
          ></input>
        </div>
        <div className="col-4">
          <button
            type="button"
            className={`btn btn-success ${styles["kg-button"]}`}
            onClick={() => {
              console.log(todo.current.value, "===", todoDate.current.value);
              const todoNameu = todo.current.value;
              const todoDateu = todoDate.current.value;
              todo.current.value="";
              todoDate.current.value="";
              console.log(todo)

              todoCtx.todoAdd(todoNameu,todoDateu);
              // setTodo("");
              // setTodoDate("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
