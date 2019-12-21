import React from 'react';
import './App.css';
import TodoList from "../components/todo-list/TodoList"
import TodoHeader from "../components/todo-header/TodoHeader"


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



class App extends React.Component {

  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.deleteList = this.deleteList.bind(this)
    this.state = {
      todoList: []
    };
  }

  

  addItem(item) {
    console.log("***addItem")
    let todoList = this.state.todoList
    const todoItem = {
      label:item,
      done:false
    }

    todoList.push(todoItem)
    console.log("new todoList>>>")
    console.log(todoList)
    this.setState({
        todoList : todoList
    })
    
    console.log("todoList="+this.state.todoList)

  } 
  
  removeItem(index) {
    console.log("**removeItem="+index)
    let todoList = this.state.todoList
    console.log(todoList)

    todoList.splice(index,1)
    console.log("After splice=")
    console.log(todoList)
    this.setState({
        todoList : todoList

    })

  }

  deleteList(e) {
    console.log("*******deleteList")
    e.preventDefault()
    fetch('https://assets.breatheco.de/apis/fake/todos/user/cleber', {
      method: "PUT",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log("&&&")
        console.log(resp)
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("***** deleteList*****")
        console.log(data); //this will print on the console the exact object received from the server
        console.log(this)
        console.log(this.state)
        this.setState({
          isLoaded: true,
          todoList: []
        });
    
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }

  createList(e){
    console.log("***createList")
    e.preventDefault()

    fetch('https://assets.breatheco.de/apis/fake/todos/user/cleber', {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log("&&&")
        console.log(resp)
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("***** createList*****")
        console.log(data); //this will print on the console the exact object received from the server
    
    })
    .catch(error => {
        //error handling
        console.log(error);
    });

  }

  componentDidUpdate() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/cleber', {
      method: "PUT",
      body: JSON.stringify(this.state.todoList),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log("&&&")
        console.log(resp)
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("***** componentDidUpdate*****")
        console.log(data); //this will print on the console the exact object received from the server
    
    })
    .catch(error => {
        //error handling
        console.log(error);
    });

  }

  componentDidMount() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/cleber', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log("&&&")
        console.log(resp)
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("***** componentDidMount*****")
        console.log(data); //this will print on the console the exact object received from the server

        //items = data.map(item => item.tolabeldo)
        //  console.log(items)
        this.setState({
          ...this.state,
          isLoaded: true,
          //todoList: result.items
          todoList: data
        });
    
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }

  listItem(data) {
    console.log(data)
    return data
  }

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoList todoList={this.state.todoList} createList={this.createList} deleteList={this.deleteList} addItem={this.addItem} removeItem={this.removeItem}/>
        
      </div>
    );
  }
}

export default App;
