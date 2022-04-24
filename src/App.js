import './App.css'
import Glossary from './Pages/Glossary/Glossary'
import Planet from './Components/Planet/Planet';
import Navbar from './Components/Nav/Navbar'

const planet_pictures = [
  "https://www.nasa.gov/images/content/607196main_messenger_orbit_image20111130_1_4by3_946-710.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/imagesvenus20191211venus20191211-16.jpeg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/187_1003705_americas_dxm.png",
  "https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg",
  "",
]

function App() {
  return (
    <div className="App App__background">
      <Navbar/>
      {/* Landing goes here */}
      <Planet name={"Mercury"} image={planet_pictures[0] } />
      <Planet name={"Venus"} image={planet_pictures[1] } />
      <Planet name={"Earth"} image={planet_pictures[2] } />
      <Planet name={"Mars"} image={planet_pictures[3] } />
      <Planet name={"Jupiter"} image={planet_pictures[4] } />
      <Planet name={"Saturn"} image={planet_pictures[5] } />
      <Planet name={"Uranus"} image={planet_pictures[6] } />
      <Planet name={"Neptune"} image={planet_pictures[7] } />


    </div>
  );
}

export default App;
