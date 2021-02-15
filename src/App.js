import { useState } from 'react';


import Header from './components/Header';
import Hero from './components/Hero.js'
import Products from './components/Products.js';
import Monetizing from './components/Monetizing';
import Footer from './components/Footer'

import model1 from './img/model1.jpeg';
import model2 from './img/model2.jpg';
import model3 from './img/model3.jpg';
import model4 from './img/model4.jpg';
import model5 from './img/model5.jpg';
import './App.css';

function App() {

  const models = [
    {
      title: 'Aerospace',
      price: '10$',
      img: model1,
    },
    {
      title: 'Swords',
      price: '5$',
      img: model2
    },
    {
      title: 'Human and dog',
      price: '15$',
      img: model3
    },
    {
      title: 'Car',
      price: '10$',
      img: model4
    },
    {
      title: 'Humans',
      price: '12$',
      img: model5
    }
  ]

  const [ isLogged, setLogged ]= useState(false)

  function handleLogin(){
    setLogged(!isLogged)
  }

  return (
    <div className="app">
      <Header isLogged={isLogged} handleLogin={handleLogin}/>
      <Hero />
      <Products data={models} />
      <Monetizing />
      <Footer />
    </div>
  );
}

export default App;
