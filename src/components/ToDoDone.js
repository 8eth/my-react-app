import React from 'react'
import ToDoCard from './ToDoCard'

function ToDoDone({ toDoList }) {
  return (
    <div>ToDoDone
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

export default ToDoDone