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

function Home() {
    return <h1>We are on the Home page</h1>;
}

// function About() {
//     return <h2>We are on the about page</h2>;
// }

function Users() {
    return <h2>We are on the users page</h2>;
}


function App() {

    // useEffect(() => {
    //     console.log('run this code only on page load')
    //     // console.log('run this code only when certain things in the deps list changes')
    // }, [])

    const [counter, setCounter] = useState(0);
    const [toDoList, setToDoList] = useState(['Item one', 'Item two']);

    const [menuItems, setMenuItems] = useState([
        'Installation',
        'Main Concepts',
        'Advanced Guides',
        'Hooks',
    ]);

    const [buttonItems, setButtonItems] = useState([
        {text: 'Continue', rounded: true, color: 'red'},
        {text: 'Submit'},
        {text: 'Sign Up', rounded: true},
    ]);


    // Loop over the buttonItems and render the button component for each item in the array

    const [itemText, setItemText] = useState('');

    const incrementCounter = async () => {
        let newCounter = counter + 1 // I have made a copy of the counter state variable.
                                     // NOT updating the counter directly
        console.log(newCounter)
        setCounter(newCounter)
    };

    const updateInputValue = async (event) => {
        console.log(event.currentTarget.value)
        setItemText(event.currentTarget.value)

    };

    const addItem = async () => {
        setToDoList([...toDoList, itemText])
        setItemText('')
    };

    const executeThisFunctionWhenButtonIsClicked = async (num) => {
        console.log('the number received from the child is', num)
        alert(`the number received from the child is ${num}`)

    };

  return (

      <Router>
          <div>
              {/*<nav>*/}
              {/*    <ul>*/}
              {/*        <li>*/}
              {/*            <Link to="/">Home</Link>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*            <Link to="/about">About</Link>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*            <Link to="/users">Users</Link>*/}
              {/*        </li>*/}
              {/*    </ul>*/}
              {/*</nav>*/}

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