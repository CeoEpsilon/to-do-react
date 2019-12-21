import React from "react"
import TodoListItem from "../todo-list-item/TodoListItem"
import "./TodoList.css"
import TodoForm from "../todo-form/TodoForm"

function TodoList(props) {
    console.log("***TodoList")
    console.log(props.todoList)
    console.log(props.todoList.length)
    console.log(props.cleanUpList)
    console.log("%%%%%%%%")
    if(!props.todoList )
        return
    let items = props.todoList.map( (item,index) => {
        return (
            <TodoListItem key={index} index={index} item={item} removeItem={props.removeItem} />
        )
    })

    return (    
        <div className="TodoList">

            <ul className="list-group">
                <li className="list-group-item"><TodoForm addItem={props.addItem} createList={props.createList} cleanUpList={props.cleanUpList} /></li>
                {items}
            </ul>
        </div>
    )
}

export default TodoList