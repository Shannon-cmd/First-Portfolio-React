import React, { Fragment } from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <About />
    </Fragment>
  )

};

export default App;