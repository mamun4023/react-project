import React, { Component } from 'react';
import   {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/footer';
import About from './components/about';
import Notice from './components/notice';
import Learning from './components/learning';
import Department from './components/department';
import Contact from './components/contact';
class App extends Component{


  render(){
    return(
      <>
           

          <BrowserRouter>
            <Navbar/>

            
              <Route exact path = "/" component = {Home} />
              <Route  path = "/about" component ={About}/>
              <Route  path = "/notice" component ={Notice} />
              <Route  path = "/learning" component = {Learning} />
              <Route  path = "/department" component = {Department} />
              <Route  path = "/contact" component = {Contact} />

      
            <Footer/>
          </BrowserRouter>

      </>

    )
  }
}

export default App;