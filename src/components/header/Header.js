import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='posts'>Posts</Link>
      </li>
      <li>
        <Link to='create-post'>Create Post</Link>
      </li>
    </ul>
  )
}

export default Header
