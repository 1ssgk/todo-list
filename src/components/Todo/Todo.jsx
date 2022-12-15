import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  /* checkbox onChange 발생 시 */
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  /* 삭제 버튼 클릭 시  */
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
      
    </li>
  );
}
