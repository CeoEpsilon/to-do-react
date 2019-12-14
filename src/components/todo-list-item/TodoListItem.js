import React from "react"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./TodoListItem.css"



class TodoListItem extends React.Component {

 
    render ()  {

        return (
            <li className="list-group-item " id={this.props.index}>{this.props.item}
            <i className="remove m-b2" onClick={()=>this.props.removeItem(this.props.index) }>+</i>
            </li>
        )
    }

}


//            <FontAwesomeIcon className="remove" icon={faTimes} onClick={this.onClick}/>
export default TodoListItem