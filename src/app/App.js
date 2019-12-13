import React from 'react';
import './App.css';
import TodoList from "../components/todo-list/TodoList"
import TodoHeader from "../components/todo-header/TodoHeader"
import TodoForm from "../components/todo-form/TodoForm"

/*
Todo app structure

TodoApp
  - TodoHeader
	- TodoForm
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
*/

const todoList = ["Make the bad", "Wash my hands", "Eat","Walk the dog"];

class App extends React.Component {

  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
    this.state = {
      todoList: todoList
    };
  }

  addItem(item) {
    console.log("***addItem")
    let todoList = this.state.todoList
    todoList.push(item)
    this.setState({
        todoList : todoList
    })
    
    console.log("todoList="+this.state.todoList)

  } 

  removeIte(index) {
    let todoList = this.state.todoList
    let newTodoList = todoList.slice(index,1)
    this.setState({
      todoList: newTodoList
    })
  }
 
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoForm addItem={this.addItem} />
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
