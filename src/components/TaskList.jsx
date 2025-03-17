import React, { useContext } from 'react'

import TaskItem from './TaskItem'
import { useNavigate } from 'react-router-dom'

const TaskList = ({handleDelete,handleChangeStatus,tasks}) => {

  const nav = useNavigate()
  return (
    <div id='task-list'>
      <h1>To Do List</h1>
      <div id='tasks'>
        {tasks.map(task => (<TaskItem key={task.id} task={task} handleChangeStatus={handleChangeStatus} handleDelete={handleDelete} /> ))} 
      </div>
      <button onClick={() => nav('/add')}>+ Add A Task</button>
    </div>
    
  )
}

export default TaskList