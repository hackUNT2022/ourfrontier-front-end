import './App.css'
import Glossary from './Pages/Glossary/Glossary'
import Planet from './Components/Planet/Planet';
import Navbar from './Components/Nav/Navbar'
import SolarSystem from './Components/SolarSystem/SolarSystem';



function App() {
  return (
    <div className="App App__background">
      <Navbar/>
      <SolarSystem/>
    </div>
  );
}

export default App;
