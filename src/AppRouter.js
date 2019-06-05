import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header/Header'
import loadable from '@loadable/component'
import { mainRoute } from './configs/mainRoute'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {mainRoute.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={loadable(() => import('./pages/' + route.comp), {
                fallback: <h1>Loading ...</h1>
              })}
            />
          ))}
        </div>
      </Router>
    )
  }
}

export default AppRouter
