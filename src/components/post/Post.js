import React from 'react'

function Post({ match }) {
  console.log(match)
  return <h3>Post id: {match.params.id}</h3>
}

export default Post
