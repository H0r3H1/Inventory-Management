import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Me from './components/me';
import Shipping from './components/shipping';
import Stock from './components/stock';
import Raw from './components/rawmaterial';





function App() {
  return (
    <Router>
   
    
      <Routes>
      
      <Route path ='/'element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/me' element={<Me/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/stock' element={<Stock/>}/>
      <Route path='/rawmaterial' element={<Raw/>}/>







      
      

      </Routes>
    </Router>
  );
}

export default App;
