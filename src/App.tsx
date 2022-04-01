import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Write from './Pages/write/Write';
import Single from './Pages/Single/Single';
import AboutUs from './Pages/About Us/Aboutus';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import { IWriteBlog } from './types';
import Gallery from './Pages/Gallery/Gallery';
import GalleryContainer from './Pages/Gallery/GalleryContainer';

const App:React.FC=()=> {
  const[writeblog,setWriteBlog]=useState<IWriteBlog[]>([])
  
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Footer/>
      <Switch>
      <Route exact path='/'>
        <Homepage writeblog={writeblog}/>
      </Route>
      <Route exact path='/write'>
        <Write  writeblog={writeblog} setWriteBlog={setWriteBlog}/>
      </Route>
      <Route exact path='/post/:postId'>
        <Single/>
      </Route>
      <Route exact path='/aboutus'>
        <AboutUs/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/gallery'>
<GalleryContainer/>
      </Route>
    </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
