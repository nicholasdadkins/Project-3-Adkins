import './App.css';
import {useState, useEffect} from 'react'
import MyButton from "./my-button";
import MenuItem from "./menu-item"; //Both of these are just hooks
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About'
import Todo from "./Todo";
import Contact from "./Contact";


function App() {

    // useEffect(() => {
    //     console.log('run this code only on page load')
    //     // console.log('run this code only when certain things in the deps list changes')
    // }, [])
    
  return (

      <Router>
          <div>
              <nav className={'border p-2 bg-gray-900'}>
                  <ul>
                      <li className={'inline p-2 text-white'}>
                          <Link to="/">About</Link>
                      </li>
                      <li className={'inline p-2 bg-blue-600 text-white'}>
                          <Link to="/todo">Todo</Link>
                      </li>
                      <li className={'inline p-2 text-white'}>
                          <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
              </nav>

          

              
              <Switch>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/todo">
                      <Todo />
                  </Route>
                  <Route path="/">
                      <About />
                  </Route>
              </Switch>
          </div>
      </Router>


  );
}

export default App;