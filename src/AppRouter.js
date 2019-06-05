import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Posts from './pages/posts'
import CreatePost from './pages/create-post'
import Header from './components/header/Header'

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />

        <Route path='/' exact component={Home} />
        <Route path='/posts' component={Posts} />
        <Route path='/create-post' component={CreatePost} />
      </div>
    </Router>
  )
}

export default AppRouter
