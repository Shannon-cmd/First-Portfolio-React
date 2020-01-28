import React, { Fragment } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Form />
      <Footer />
    </Fragment>
  )

};

export default App;