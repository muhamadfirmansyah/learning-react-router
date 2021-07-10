import React from 'react'
import Home from './views/Home'

import { Route } from 'react-router-dom'

/*
* Home = '/'
* About = '/about'
* Contact = '/contact'
*/

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  )
}

export default App;
