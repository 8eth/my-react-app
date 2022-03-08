import React from 'react'
import Search from './Search'
import ToDoList from './ToDoList'
import ToDoDone from './ToDoDone'
import NewToDo from './NewToDo'

function Home() {
  return (
    <div>Home
        <Search/>
        <ToDoList />
        <ToDoDone />
        <NewToDo />
    </div>
  )
}

export default Home