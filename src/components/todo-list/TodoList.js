import React from "react"
import TodoListItem from "../todo-list-item/TodoListItem"

function TodoList(props) {
    let items = props.todoList.map( (item,index) => {
        return (
            <TodoListItem key={index} index={index} item={item} />
        )
    })
    console.log("TodoList")
    return (    
        <div>
            <ul>{items}</ul>
        </div>
    )
}

export default TodoList