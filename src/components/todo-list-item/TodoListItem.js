import React from "react"


function TodoListItem(props) {
    return (
        <li id={props.index}>{props.item}
        </li>
    )
}

export default TodoListItem