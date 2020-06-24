import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { InputField, Button, ErrorAlert, Card } from '../components'

import './screens.css'

export const LoginScreen = () => {

  const history = useHistory()

  const [name, setName] = useState('')
  const [course, setCourse] = useState(null)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    isValid() && history.push('/dashboard')

  }

  const isValid = () => {
    if(!name || !course) { setError('Please fill in all the fields.'); return false}
    if(name.length < 4) { setError('Name is too short'); return false}
    if(!Number.isInteger(+course)) {setError('Course must be a whole positive number less then 7'); return false}
    return true
  }

  return (
    <div className='login-screen'>
      <Card>
        <InputField placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <InputField placeholder='Course' onChange={(e) => setCourse(e.target.value)}/>
        {error && <ErrorAlert errorMessage={error}/>}
        <Button text='submit' onClick={onSubmit}/>
      </Card>
    </div>
  )
}
