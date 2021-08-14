import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocaltodos();
    }, []);
    
    
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos.status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos (todos);
                break;
        }
    };
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getLocaltodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="App">
            <header>
                <h1>To Do List</h1>
            </header>
            <Form 
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
            />
            <TodoList 
            filteredTodos={filteredTodos}
            setTodos={setTodos} 
            todos={todos} 
            />
        </div>
    );
}

export default App;
  