import React, { Fragment } from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills';
import Form from './components/Form';

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Form />
    </Fragment>
  )

};

export default App;