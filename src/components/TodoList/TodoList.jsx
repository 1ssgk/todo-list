import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readToFromLocalStorage);

  /* 초기 기본값 셋팅 */
  useEffect(() => {
    /* LocalStorage 사용 */
    if (window.localStorage) {
      /* todos가 변경되는 경우 LocalStrorage에 저장 및 업데이트 */
      if(todos){
        localStorage.setItem('todos',JSON.stringify(todos));
      }
    }
  }, [todos]);

  /* 기존 Todo를 수정한다. */
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  /* 새로운 Todo를 추가한다. */
  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  /* 기존 Todo를 삭제한다. */
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

    /* filter 된 Todos 이다. */
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

/* LocalStorage에서 Todos를 가져온다. */
function readToFromLocalStorage () {
  console.log('oh')
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

/* 변경된 filter에 맞게 Todos를 리턴한다. */
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};