import { useContext, useEffect, useState } from 'react'
import styles from './app.module.css'
import Todo from './components/Todo'
import { TodosContext } from './MyContext'

const App = () => {
  const [inputBox, setInputBox] = useState("");
  const [todos, setTodos, , deleteTodos] = useContext(TodosContext);

  const addNewTodo = () => {
    const inputEl = document.querySelector(`.${styles.inputContainer} input`);
    inputEl.value && setTodos(inputEl.value)
    setInputBox('');
    document.querySelector(`.${styles.inputContainer} input`).focus();
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Daily To Do List</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Add new list item' value={inputBox} onChange={e => setInputBox(e.target.value)} />
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div className={styles.todos}>
        {todos.map((todo, key) => <Todo message={todo.message} id={todo.id} key={key} isSelected={todo.isSelected} />)}
      </div>
      <div className={styles.bottom}>
        <span>{todos.filter(todo => todo.isSelected).length} item selected</span>
        <span onClick={deleteTodos}>{todos.filter(todo => todo.isSelected).length == 0 ? "Clear All" : "Clear Selected"}</span>
      </div>
    </div>
  )
}

export default App