import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function TodoList(props){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
        .then((response) => response.json())
        .then(date => {
            setTodos(Object.values(date));
        })
        .catch(err => console.log(err))
    },[])
    
    const changestatusHandler = (todoId) => {
        setTodos(state => state.map(todo => todo._id == todoId ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }
    return(
        <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>

        <div className="table-wrapper">


          {/* <div className="loading-container">
        <div className="loading-spinner">
          <span className="loading-spinner-text">Loading</span>
        </div>
        </div>*/}


          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>


            {todos.map(todo => (
              <Todo
                 key={todo._id}
                 _id={todo._id}
                 text={todo.text}
                 isCompleted={todo.isCompleted}
                 changestatusHandler={changestatusHandler}
              />
            ))}

            </tbody>
          </table>
        </div>
      </section>
    )
}