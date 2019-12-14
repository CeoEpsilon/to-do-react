import React from "react"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./TodoListItem.css"

function TodoListItem(props) {
    return (
        <li className="list-group-item " id={props.index}>{props.item}
        <FontAwesomeIcon className="remove" icon={faTimes}/>
        </li>
   
    )
}

export default TodoListItem