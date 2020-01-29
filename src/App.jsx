import React, { Fragment, useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1700);
  })
  if (loading === true) {
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
  } else {
    return (
      <Fragment>
        <Loading />
      </Fragment>
    )
  }
}



export default App;