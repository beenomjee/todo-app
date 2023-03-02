import { useContext } from 'react';
import { TodosContext } from '../MyContext';
import styles from './Todo.module.css'


const todo = ({ id, isSelected, message }) => {
    const [, , editTodos] = useContext(TodosContext);

    const clickHandler = () => {
        editTodos(id)
    }


    return (
        <div className={styles.todo}>
            <input type="checkbox" id={`checkbox${id}`} checked={isSelected} onChange={clickHandler} />
            <label htmlFor={`checkbox${id}`}>{message}</label>
        </div>
    )
}

export default todo