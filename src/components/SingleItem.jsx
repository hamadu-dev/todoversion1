import React, { useContext } from "react";
import styles from "./SingleItem.module.css";
import todoStore from "../store/todo-items-store";

const SingleItem = ({ todoItem, onDeleteHandler }) => {
  const todoCtx = useContext(todoStore)
  return (
    <div className={`${styles["kg-row"]} row`}>
      <div className="col-4">{todoItem.todoName}</div>
      <div className="col-4">{todoItem.todoDate}</div>
      <div className="col-4">
        <button
          type="button"
          className={`btn btn-danger ${styles["kg-button"]}`}
          onClick={()=>{todoCtx.todoDelete(todoItem.id)}}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
