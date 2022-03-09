import React from 'react'
import { useEffect, useState } from 'react'
import Search from './Search'
import ToDoList from './ToDoList'
import ToDoDone from './ToDoDone'
import NewToDo from './NewToDo'

function Home() {
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/List')
      .then (res => res.json())
      .then (toDoList => setToDoList(toDoList))
  }, [])
  
  return (
    <div>Home
        <Search/>
        <ToDoList 
          toDoList = {toDoList}
        />
        <ToDoDone 
          toDoList = {toDoList}
        />
        <NewToDo />
    </div>
  )
}

export default Home