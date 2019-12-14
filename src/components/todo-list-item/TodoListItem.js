import React from "react"


function TodoListItem(props) {
    return (
        <li className="list-group-item" id={props.index}>{props.item}
        </li>
    )
}

export default TodoListItem