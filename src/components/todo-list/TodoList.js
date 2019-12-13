import React from "react"
import TodoListItem from "../todo-list-item/TodoListItem"
import "./TodoList.css"
import TodoForm from "../todo-form/TodoForm"

function TodoList(props) {
    let items = props.todoList.map( (item,index) => {
        return (
            <TodoListItem key={index} index={index} item={item} />
        )
    })
    console.log("TodoList")

    console.log(props.addItem)
    return (    
        <div className="TodoList">

            <ul className="list-group">
                <li className="list-group-item"><TodoForm addItem={props.addItem} /></li>
                {items}
            </ul>
        </div>
    )
}

export default TodoList