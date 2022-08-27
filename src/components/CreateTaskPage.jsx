import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './Form';

export default function CreateTaskPage() {
  const [types, setTypes] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/types').then(res => {
      setTypes(res.data)
    })
    axios.get('/api/employees').then(res => {
      setEmployees(res.data)
    })
  }, [])

  return (
    <div className='container mt-2'>
      <Form
        title='Create task'
        onSubmit={async val => {
          await axios.post('/api/tasks', {
            title: val.title,
            description: val.description,
            due_date: val.dueDate,
            finished: false,
            task_type_id: val.type,
            employee_id: val.employee,
          });
          alert('You have successfully added new task ');
        }}
      >
        <Form.Input name='title' required label='Title' />
        <Form.Input name='dueDate' type='date' required label='Due date' />
        <Form.Select name='type' label='Task type' required
          data={types.map(e => {
            return {
              value: e.id,
              label: e.name
            }
          })
          } />
        <Form.Select name='employee' label='Employee' required
          data={employees.map(e => {
            return {
              value: e.id,
              label: e.email
            }
          })
          } />
        <Form.TextArea name='description' label='Description' />
        <Form.Input className='btn btn-primary' type='submit'>Crate task</Form.Input>
      </Form>
    </div>
  )
}
