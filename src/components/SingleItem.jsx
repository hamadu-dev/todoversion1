import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = ({ todoItem, onDeleteHandler }) => {
  return (
    <div className={`${styles["kg-row"]} row`}>
      <div className="col-4">{todoItem.todoName}</div>
      <div className="col-4">{todoItem.todoDate}</div>
      <div className="col-4">
        <button
          type="button"
          className={`btn btn-danger ${styles["kg-button"]}`}
          onClick={()=>{onDeleteHandler(todoItem.id)}}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
