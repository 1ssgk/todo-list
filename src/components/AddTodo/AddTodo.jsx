import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  /* Text가 바뀌면 저장 */
  const handleChange = (e) => setText(e.target.value);

  /* Submit 이벤트 */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* 예외 처리 */
    if (checkException()) return;

    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  /* 예외 점검 리스트 */
  const checkException = () => {
    if (text.trim().length === 0) {
      alert("추가 할 Todo가 없습니다.");
      setText("");
      return true;
    }
    return false;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleSubmit}>Add</button>
    </form>
  );
}
