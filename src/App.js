import React from 'react'
import Home from './views/Home'

import { Route } from 'react-router-dom'
import About from './views/About'
import Contact from './views/Contact'

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

      <Route path="/contact" exact component={Contact} />
    </div>
  )
}

export default App;
