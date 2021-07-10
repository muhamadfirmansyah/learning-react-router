import React from 'react'
import Home from './views/Home'

import { Route } from 'react-router-dom'
import About from './views/About'

/*
* Home = '/'
* About = '/about'
* Contact = '/contact'
*/

const App = () => {
  return (
    <div>

      <Route path="/" exact component={Home} />

      <Route path="/about" exact component={About} />
    </div>
  )
}

export default App;
