import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import './index.css'


export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Footer />
    </div>
  )
}