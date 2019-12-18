import React from "react"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./TodoListItem.css"



function  TodoListItem (props) {


    return (
        <li className="list-group-item " id={props.item}>{props.item}
        <i className="remove m-b2" onClick={()=>props.removeItem(props.index) }>+</i>
        </li>
    )

}


//            <FontAwesomeIcon className="remove" icon={faTimes} onClick={this.onClick}/>
export default TodoListItem