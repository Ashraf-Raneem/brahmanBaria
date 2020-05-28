import React from 'react';
import './App.css';
import NavbarMain from './components/navbars/navbar.component';
import CarouselBg from './components/carousel/caraousel.component'
import Cover from './components/cover/cover.component';
import Info from './components/info/info.component'
import About from './components/about/about.component'
import Detailed from './components/detailed/detailed.component';
import Footer from './components/footer/footer.component'
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Cover/>
      <About/>
      <Info/>
      <Detailed/>
      <Footer/>
    </div>
  );
}

export default App;
