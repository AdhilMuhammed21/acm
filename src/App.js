import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
