import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import About from './About'
import Todo from "./Todo";
import Contact from "./Contact";


function App() {

  return (
      <Router>
          <div>
              <nav className={'border p-2 bg-gray-900'}>
                  <ul>
                      <li className={'inline p-2 text-white'}>
                          <NavLink exact activeClassName="active" to="/about">About</NavLink>
                      </li>
                      <li className={'inline p-2  text-white'}>
                          <NavLink exact activeClassName="active" to="/todo">Todo</NavLink>
                      </li>
                      <li className={'inline p-2 text-white'}>
                          <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
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