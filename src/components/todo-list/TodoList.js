import React from "react"
import TodoListItem from "../todo-list-item/TodoListItem"
import "./TodoList.css"

function TodoList(props) {
    let items = props.todoList.map( (item,index) => {
        return (
            <TodoListItem key={index} index={index} item={item} />
        )
    })
    console.log("TodoList")
    return (    
        <div className="TodoList">
            <ul className="list-group">{items}</ul>
        </div>
    )
}

export default TodoList