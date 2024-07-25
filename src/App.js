import './App.css';
import Jeff from './components/Navbars/Jeff';
import Home from './components/Home/Home';
import Fotter from './components/Fotter';
import What from './components/WhatweDo/What';
import Who from './components/WhoweAre/Who';
import Contact from './components/Contacts/Contact';
import Citizen from './components/Citizens/Citizen';
import Career from './components/Careers/Career';
import Press from './components/Press/Press';
import Portfolio from './components/Portfolio/portfolio';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Jeff />
    <Routes>
    <Route path='/' element={  <Home /> } />
    <Route path='/what' element={  <What /> } />
    <Route path='/who' element={  <Who /> } />
    <Route path='/press' element={  <Press /> } />
    <Route path='/portfolio' element={  <Portfolio /> } />
    <Route path='/career' element={  <Career /> } />
    <Route path='/contact' element={  <Contact /> } />
    <Route path='/citizen' element={  <Citizen /> } />
    </Routes>
    
    <Fotter />
    </div>
  );
}

export default App;
