import React from 'react'
import ToDoCard from './ToDoCard'

function ToDoList({ toDoList }) {
  // console.log(toDoList)
  return (
    <div>ToDoList
        {toDoList.map(toDoItem => (
            <ToDoCard 
              key = {toDoItem.id}
              toDoItem = {toDoItem}
            />
          )
        )}
    </div>
  )
}

export default ToDoList