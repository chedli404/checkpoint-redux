import React from 'react'
import { Link } from 'react-router-dom'
const TaskItem = ({ task, handleChangeStatus, handleDelete }) => {

    return (

        <div className={`task-item ${task.done ? 'task-done' : 'task-pending'}`}>
            <Link to={`/edit/${task.id}`} className='task-link'>Edit</Link>

            <div className='task-header'>

                <div className='task-btns'>
                    <p onClick={() => handleChangeStatus(task.id)} className='task-status'>{task.done ? <p><i className="fa-solid fa-square-xmark"></i></p> : <i className="fa-solid fa-square-check"></i>}  </p>
                    <p onClick={() => handleDelete(task.id)} className='task-delete'><i className="fa-solid fa-trash"></i></p>
                </div>
            </div>
            <h3 className='task-name'>{task.name}</h3>
            <p className='task-description'>{task.description}</p>

            <p className='task-date'>{task.date}</p>
        </div>
    )
}

export default TaskItem