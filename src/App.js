import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState } from "react";
import AddTodos from './MyComponents/AddTodos';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
  setTodos(todos.filter((e)=>
  {
  return e!== todo }))

  }
  const addTodo =(title, desc)=>{
    let sno;
    if(todos.length == 0){
       sno = 0;
    }
    else{
    sno = todos[todos.length-1].sno + 1;
    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
 
  
  const [todos, setTodos] = useState([initTodo]);
     useEffect(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
    <>
      <Header title="My todos List" searchBar={false} />
      <AddTodos  addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
