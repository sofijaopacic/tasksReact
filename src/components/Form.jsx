import React, { useContext, useState } from 'react'

const FormContext = React.createContext({});

export default function Form(props) {
  const [formState, setFormState] = useState({})
  const changeField = name => value => {
    setFormState(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  return (
    <FormContext.Provider
      value={{
        formState: formState,
        changeField
      }}
    >
      {
        props.title && (
          <h2 className='text-center p-2'>{props.title}</h2>
        )
      }
      <form onSubmit={e => {
        e.preventDefault();
        props.onSubmit(formState);
      }}>
        {props.children}
      </form>
    </FormContext.Provider>
  )
}

export function FormInput(props) {
  const formContext = useContext(FormContext)
  const onChange = formContext.changeField(props.name);
  return (
    <div class="form-group">
      <label class="col-form-label">{props.label}</label>
      <input
        class="form-control"
        type={props.type}
        required={props.required}
        name={props.name}
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
        value={formContext.formState[props.name]}
      />
    </div>
  )
}

export function FormSelect(props) {
  const formContext = useContext(FormContext)
  const onChange = formContext.changeField(props.name);
  return (
    <div class="form-group">
      <label class="col-form-label">{props.label}</label>
      <select
        class="form-control"
        type={props.type}
        required={props.required}
        name={props.name}
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
        value={formContext.formState[props.name]}
      >
        {
          props.data.map(element => {
            return (
              <option value={element.value}>{element.label}</option>
            )
          })
        }
      </select>
    </div>
  )
}

Form.Input = FormInput;
Form.Select = FormSelect