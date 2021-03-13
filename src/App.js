import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from "aos"
import Check from './components/Check';
import Particles from "react-particles-js"
function App() {
  AOS.init({
    offset: 320,
    duration: 1300
  })
  return (
    <div className="App" >
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 500
              }
            }
          }
        }}
      />
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Gallery />
      <Check />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
