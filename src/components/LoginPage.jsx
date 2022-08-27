import React from 'react'
import Form from './Form'
import axios from 'axios';

export default function LoginPage(props) {
  return (
    <div className='container mt-3'>
      <Form
        title='Login page'
        onSubmit={async formValue => {
          const res = await axios.post('/api/login', formValue);
          props.setUser(res.data.user);
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token.split('|')[1]}`;
        }}
      >
        <Form.Input name='email' type='email' required label='Email' />
        <Form.Input name='password' type='password' required label='Password' />
        <Form.Input className='btn btn-primary' type='submit'>Login</Form.Input>
      </Form>
    </div>
  )
}
