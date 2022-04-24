import './App.css'
import Glossary from './Pages/Glossary/Glossary'
import Navbar from './Components/Nav/Navbar'
import SolarTour from './Pages/SolarTour';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ISS from './Pages/ISS/ISS';
import Calculator from './Pages/Calculator/Calculator';

function App() {
  return (
    <div className="App App__background">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='*' element={<SolarTour />} />
          <Route path='ourfrontier-front-end/glossary' element={<Glossary />} />
          <Route path='ourfrontier-front-end/iss' element={<ISS />} />
          <Route path='ourfrontier-front-end/calculator' element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
