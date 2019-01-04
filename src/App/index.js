import React, { Component } from 'react'
import Navbar from '../Navbar'
import MainPage from '../MainPage'
import MyWork from '../MyWork'
import AboutPage from '../About'
import ContactPage from '../Contact'
import './style.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <MainPage />
        <AboutPage />
        <MyWork />
        <ContactPage />
      </div>
    )
  }
}

export default App
