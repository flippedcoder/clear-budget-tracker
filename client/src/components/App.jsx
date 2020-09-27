import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Header from './common/Header'
import Home from './Home'
import Items from '../components/Items'
import Logout from '../components/Logout'
import Settings from '../components/Settings'

const Goals = React.lazy(() => import('../components/Goals'))

const history = createBrowserHistory()

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/goals" component={Goals} />
          </Suspense>
          <Route path="/items" component={Items} />
          <Route path="/logout" component={Logout} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </>
  )
}

export default App
