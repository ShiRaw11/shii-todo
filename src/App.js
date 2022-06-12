import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';

import './App.css';


const headr=new URL('./images/todos.jpg',import.meta.url)
const App = ()=> {
  const initialState=JSON.parse(localStorage.getItem("todos")) || [];

  const [input,setInput] =useState("");
  const [todos,setTodos]=useState(initialState);
  const [editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <div className="Container">
      <div className="App-wrapper">
      <img src={headr} className="Todo-logo"  alt='Todo-list'></img>
 <div>
   <Form
   input={input}
   setInput={setInput}
   todos={todos}
   setTodos={setTodos}
   editTodo={editTodo}
   setEditTodo={setEditTodo} />
 </div>
 <div>
   <Todolist
     todos= {todos}
  setTodos={setTodos}
  setEditTodo={setEditTodo}
  />
 </div>
    
      </div>
        </div>
      

  );
}

export default App;
