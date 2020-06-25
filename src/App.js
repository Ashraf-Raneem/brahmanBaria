import React from 'react';
import './App.css';
import NavbarMain from './components/navbars/navbar.component';

import HomePage from './pages/home-page/home-page.component'
import AboutPage from './pages/about-page/about-page.component'

import {Switch,Router,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavbarMain/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
