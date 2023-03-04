import { useContext, useState } from 'react'
import styles from './app.module.css'
import Todo from './components/Todo'
import { TodosContext } from './MyContext'

const App = () => {
  const [inputBox, setInputBox] = useState("");
  const [todos, setTodos, , deleteTodos, saveModifyTodo] = useContext(TodosContext);
  const [indexOfEditTodo, setIndexOfEditTodo] = useState("");

  const addNewTodo = () => {
    const inputEl = document.querySelector(`.${styles.inputContainer} input`);
    inputEl.value && setTodos(inputEl.value)
    setInputBox('');
    document.querySelector(`.${styles.inputContainer} input`).focus();
  }

  const modifyTodos = (id) => {
    setIndexOfEditTodo(`${id}`);
    setInputBox(todos[id].message);
    document.querySelector(`.${styles.inputContainer} input`).focus();

  }

  const saveEditTodo = () => {
    const inputEl = document.querySelector(`.${styles.inputContainer} input`);
    inputEl.value && saveModifyTodo(indexOfEditTodo, inputEl.value)
    inputEl.value && setIndexOfEditTodo('');
    setInputBox('');
    document.querySelector(`.${styles.inputContainer} input`).focus();
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Daily To Do List</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Add new list item' value={inputBox} onChange={e => setInputBox(e.target.value)} />
        <button onClick={indexOfEditTodo ? saveEditTodo : addNewTodo}>{indexOfEditTodo ? "Save" : "Add"}</button>
      </div>
      <div className={styles.todos}>

        {todos.length == 0 ? <p>You don't have any task here.</p> : todos.map((todo, key) => <Todo message={todo.message} id={todo.id} key={key} isSelected={todo.isSelected} modifyTodos={modifyTodos} />)}
      </div>
      <div className={styles.bottom}>
        <span>{todos.filter(todo => todo.isSelected).length} item selected</span>
        <span onClick={deleteTodos}>{todos.filter(todo => todo.isSelected).length == 0 ? "Clear All" : "Clear Selected"}</span>
      </div>
    </div>
  )
}

export default App