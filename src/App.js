import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

import React, { useState , useEffect} from "react";
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo)=>{
    console.log('I am on delete of todo', todo)
    setTodos(todos.filter((item)=>{
     return item !== todo;
    }))
  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length === 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    let newTodo = {
      title:title,
      desc:desc,
      sno:sno
    }
    setTodos([...todos,newTodo]);
  }

  const [todos, setTodos] = useState( initTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Router>
    <Header title ="Todos list"/>
    <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
            <AddTodo addTodo = {addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          
        </Switch>
    

    <Footer/>
    </Router>
    </>
    
  );
}

export default App;
