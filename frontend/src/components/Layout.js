import React from 'react'
import Header from './Header'

const Layout = (props) => {
  return (
    <div className="container">
      <Header/>
      <hr style={{margin: '0 0 10px 0'}}/>
      {props.children}
    </div>
  )
}

export default Layout