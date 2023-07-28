import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Me from './components/me';
import Shipping from './components/shipping';
import store from './components/store';
import Stock from './components/stock';
import Raw from './components/rawmaterial';
import FeedForm from './components/feedback';




function App() {
  return (
    <Provider store={store}>
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
      <Route path='/feedback' element={<FeedForm/>}/>

      






      
      

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
