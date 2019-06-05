import React from 'react'
import { Link, Route } from 'react-router-dom'

import Post from '../../components/post/Post'

function Posts({ match }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to={`${match.url}/12435`}>Post 12435</Link>
        </li>
        <li>
          <Link to={`${match.url}/68356`}>Post 68356</Link>
        </li>
        <li>
          <Link to={`${match.url}/09814`}>Post 09814</Link>
        </li>
        <li>
          <Link to={`${match.url}/67390`}>Post 67390</Link>
        </li>
        <li>
          <Link to={'/'}>
            Return Home
          </Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Post} />
    </div>
  )
}

export default Posts
