import './App.css'
import TaskProvider from './context/taskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Route, Routes } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus, createTask, editTask, deleteTask } from  './js/action/actions'
import { useEffect } from 'react'

function App() {

  const tasks = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleCreate(task) {
    dispatch(createTask(task))
  }

  function handleEdit(task) {
    dispatch(editTask(task))
  }

  function handleChangeStatus(id) {
    dispatch(changeStatus(id))
  }

  function handleDelete(id) {
    dispatch(deleteTask(id))
  }

  return (
    <div id='app'>
      <TaskProvider>
        <Routes>
          <Route index element={<TaskList handleDelete={handleDelete} handleChangeStatus={handleChangeStatus} tasks={tasks}/>}/>
          <Route path='/add' element={<TaskForm handleCreate={handleCreate} handleEdit={handleEdit} tasks={tasks}/>}/>
          <Route path='/edit/:id' element={<TaskForm handleCreate={handleCreate} handleEdit={handleEdit} tasks={tasks}/>}/>
        </Routes>
      </TaskProvider>
    </div>
  )
}

export default App
