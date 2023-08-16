
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {TodoItem} from "./MyComponents/TodoItem";
import {Addtodo} from "./MyComponents/Addtodo";
import React, { useState,useEffect, useLayoutEffect } from 'react';

import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";

function App() {
   let initTodo;
   if(localStorage.getItem("todos")===null)
   {
    initTodo = [];
   }
   else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
   }


   const onDelete = (todo)=>
   {
    console.log("I am ondelete of todo",todo);
    //deleting this way kn react does not work
   // let index = todos.indexOf(todo);
    //todos.splice(index,1); 
                       
    setTodos(todos.filter((e)=>{    
      return e!==todo; 
      
    }));
    localStorage.getItem("todos",JSON.stringify(todos))
   }

   const addTodo = (title,desc)=>{

    console.log("I am Adding this todo",title,desc);
    let sno = 0;
    if(todos.length==0)
    {
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno+1;
  }
    const mytodo = {
      sno:sno,
      title:title,
      desc:desc, 
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);
   
    
     
     
     
   }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  

  return (
   <>
   
  <Router>
  <Header title = "Todos List" Searchbar = {true}/>

  
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
 
  <div className="container" >                                       
  <Addtodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}  />
  </div>
  <Footer/>
  </Router>
   </>

    
  );
}

export default App;
