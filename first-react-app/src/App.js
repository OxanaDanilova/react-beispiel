import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
/* import Technologies from './Technologies';
import Header from './Header';
import Footer from './Footer'; */

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar /> 
      <Profile />   
     
    </div>
    
  );
};


export default App;
