import './App.css'
import Glossary from './Pages/Glossary/Glossary'
import Planet from './Components/Planet/Planet';
import Navbar from './Components/Nav/Navbar'

const planet_pictures = [
  "",
  "",
  "https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg",
]

function App() {
  return (
    <div className="App App__background">
      <Navbar/>
    </div>
  );
}

export default App;
