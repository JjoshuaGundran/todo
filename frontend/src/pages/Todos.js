import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'

const apiUrl = process.env.REACT_APP_BASE_URL

function Todos() {
  let [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  let getTodos = async () => {
    let response = await fetch(`${apiUrl}/todos/`)
    let data = await response.json()
    setTodos(data)
  }

  return (
    <div className='todos-container'>
      <Link to={'/add'} className='add-button'>Add</Link>
      <ul className='todos-list'>
        {todos.map((todo) => (
          <li className='todos-list-item' key={todo.id}><ListItem todo={todo}/></li>
        ))}
      </ul>
    </div>
  )
}

export default Todos