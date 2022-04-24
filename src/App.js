import './App.css'
import Glossary from './Pages/Glossary/Glossary'
import Navbar from './Components/Nav/Navbar'
import SolarTour from './Pages/SolarTour';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ISS from './Pages/ISS/ISS';

function App() {
  return (
    <div className="App App__background">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<SolarTour />} />
          <Route path='/glossary' element={<Glossary />} />
          <Route path='iss' element={<ISS />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
