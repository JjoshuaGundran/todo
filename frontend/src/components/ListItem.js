import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({todo}) => {
  return (
    <Link to={`/${todo.id}`}>{todo.name}</Link>
  )
}

export default ListItem