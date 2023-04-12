import './App.css';
import {Routes, Route} from 'react-router-dom'

//pages und components
import NavBar from './components/NavBar'
import Gallerie from '../src/pages/Gallerie'
import Kontakt from './pages/Kontakt'
import Öffnungszeiten from './pages/Öffnungszeiten'
import Speisekarte from './pages/Speisekarte'

function App() {
  return (
    <div className="App">
      <header>
        
      <NavBar/>
      <Routes>
        <Route path='/gallerie' element={<Gallerie />}/>
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/öffnungszeiten' element={<Öffnungszeiten/>}/>
        <Route path='/speiseKarte' element={<Speisekarte/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
