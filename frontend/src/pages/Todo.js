import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const apiUrl = process.env.REACT_APP_BASE_URL

function Todo() {
  let params =  useParams()
  let todoId = params.id
  let navigate = useNavigate()
  let [todo, setTodo] = useState(null)

  useEffect(() => {
    if(todoId !== 'add') getTodo()
  }, [todoId])

  let getTodo = async () => {
    let response = await fetch(apiUrl + `/todos/${todoId}/`)
    let data = await response.json()
    setTodo(data)
  }

  let submitData = async (e) => {
    e.preventDefault()

    let url = apiUrl + '/todos/'
    let method = 'POST'

    if (todoId !== 'add') {
      url = apiUrl + `/todos/${todoId}/`
      method = 'PUT'
    }

    await fetch(url, {
      method: method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "name": todo.name,
        "complete": false
      })
    })

    navigate('/')
  }

  let deleteData = async (e) => {
    e.preventDefault()

    await fetch(apiUrl + `/todos/${todoId}`, {method: 'DELETE',})
    navigate('/')
  }

  return (
    <div className='todo-container'>
      <Link to={'/'} className='back-button'>Go Back</Link>
      {todoId !== 'add' && (
        <button onClick={deleteData}>Delete</button>
      )}
      <textarea 
        onChange={(e) => {setTodo({...todo, "name":e.target.value})}} 
        value={todo?.name}
        placeholder='Add note...'
        maxLength={100}
        className='todo-text-area'
      >
      </textarea>
      <button className='save-button' onClick={submitData}>Save</button>
    </div>
  )
}

export default Todo