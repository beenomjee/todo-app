import { createContext, useState } from 'react'

const TodosContext = createContext();
let myTodos = localStorage.getItem('MyTodos') != null ? JSON.parse(localStorage.getItem('MyTodos')) : [];

const updateLocalStorage = (data) => {
    localStorage.setItem('MyTodos', JSON.stringify(data));
}

const MyContext = ({ children }) => {
    const [todos, setStateTodos] = useState(myTodos)

    const setTodos = (val) => {
        setStateTodos(preValue => {
            const rslt = [...preValue, { id: preValue.length, isSelected: false, message: val }]
            updateLocalStorage(rslt)
            return rslt;
        })

    }
    const editTodos = (id) => {
        setStateTodos((preVal) => {
            preVal[id] = { ...preVal[id], isSelected: !preVal[id].isSelected };
            updateLocalStorage(preVal)
            return [...preVal];
        })
    }
    const deleteTodos = () => {
        if (todos.filter(todo => todo.isSelected).length == 0) {
            setStateTodos([])
            updateLocalStorage([])
        }
        else {
            setStateTodos(preVal => {
                const rslt = [...preVal.filter(todo => !todo.isSelected).map((todo, index) => ({ ...todo, id: index }))];
                updateLocalStorage(rslt)
                return rslt;
            })
        }
    }

    return (
        <TodosContext.Provider value={[todos, setTodos, editTodos, deleteTodos]}>{children}</TodosContext.Provider>
    )
}

export default MyContext
export { TodosContext }