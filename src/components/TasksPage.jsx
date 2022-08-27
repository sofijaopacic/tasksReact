import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks').then(res => {
      setTasks(res.data)
    })
  }, [])
  const deleteTask = async id => {
    await axios.delete('/api/tasks/' + id);
    setTasks(prev => {
      return prev.filter(e => e.id !== id);
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center p-3'>Tasks</h1>
      <div >
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Due date</th>
              <th>Finished</th>
              <th>Task type</th>
              <th>Employee</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.due_date}</td>
                    <td>{task.finished ? 'YES' : 'NO'}</td>
                    <td>{task.task_type.name}</td>
                    <td>{task.employee.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteTask(task.id);
                        }}
                        className='btn btn-danger'>Delete task</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
