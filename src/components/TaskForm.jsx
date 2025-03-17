import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TaskFrom = ({handleCreate,handleEdit,tasks}) => {
    const nav = useNavigate()
    const { id } = useParams()
    const [error, setError] = useState(false)

    useEffect(() => {
        if (id) {
            const task = tasks.find(task => task.id == id)
            setTaskName(task.name)
            setTaskDesc(task.description)
        }
    }, [])

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');


    // form validation
    const handleSubmit = (e) => {
        const newTask = {
            id:Math.floor(Math.random()*1000),
            name:taskName,
            description:taskDesc,
            date: new Date().toLocaleDateString(),
            done:false
        }
        const updatedTask = {
            id:id,
            name: taskName,
            description:taskDesc
        }
        e.preventDefault()
        if (!taskName || !taskDesc) return setError(true)
        id ? handleEdit(updatedTask) : handleCreate(newTask)
        nav('/')
    }



    return (
        <div id="form-container">
            <h2>{id ? 'Edit Form' : 'Add Form'}</h2>
            <form>
                {error && <p id='error-msg'>please fill your form</p>}
                <input
                    type="text"
                    value={taskName}
                    id="task-name"
                    placeholder="Enter task name"
                    onChange={(e) => setTaskName(e.target.value)} 
                />
                <input type='text'
                    id="task-desc"
                    value={taskDesc}
                    placeholder="Enter task description"
                    onChange={(e) => setTaskDesc(e.target.value)} 
                />
                <button onClick={handleSubmit}>{id ? 'Edit' : ' + Add'}Task</button>
            </form>
        </div>
    )
}

export default TaskFrom