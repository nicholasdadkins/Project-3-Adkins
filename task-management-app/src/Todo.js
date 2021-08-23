import React, {useState, useEffect} from 'react';

function Todo(props) {
    
    const [newTaskText, setNewTaskText] = useState('');

    const [view, setView] = useState('');

    const [Tasks, setTasks] = useState([
        {text: 'Go to the grocery store', completed: false},
        {text: 'Feed pets', completed: false},
        {text: 'Garden', completed: false}
    ]);

    const [allTask, setAllTasks] = useState([
        {text: 'Go to the grocery store', completed: false},
        {text: 'Feed pets', completed: false},
        {text: 'Garden', completed: false}
    ]);


    const onTextChange = async (event) => {
        setNewTaskText(event.currentTarget.value)
    };

    const addTask = async () => {
        setAllTasks([...allTask, {text: newTaskText, completed: false}])
        setTasks([...Tasks, {text: newTaskText, completed: false}])
        setNewTaskText('')
        setView({view: 'all'})
    };
    
    const filterCompleted = [
        {
            predicateFn: allTask => allTask.completed === "true" 
        }
    ];
    const filterActive = [
        {
            predicateFn: allTask => allTask.completed === "false" 
        }
    ];


    const allTasks = async () => {
        let TasksAll = allTask
        setTasks([...TasksAll])
        setView({view: 'all'})
        


    };
    const activeTasks = async () => {
        let TasksCopy = allTask.filter(Tasks => Tasks.completed === false)
        setTasks([...TasksCopy])
        setView({view: 'active'})
        
    };

    const completedTasks = async () => {
        let TasksCopy = allTask.filter(Tasks => Tasks.completed === true)
        setTasks([...TasksCopy])
        setView({view: 'completed'})
    };

    const onCheckBoxChange = async (event, Task, idx) => {
        let TasksCopy = Tasks
        TasksCopy.map((TaskCopy, index) => {
            if(index === idx){
                TaskCopy.completed = event.target.checked
            }
        })
        setTasks([...TasksCopy])
        setAllTasks([...TasksCopy])
    };

    const onTaskDeleted = async (event, Task, idx) => {
        let TasksCopy = []
        Tasks.map((Task, index) => {
            if(index !== idx){
                TasksCopy.push(Task)
            }
        })
        setTasks([...TasksCopy])
        setAllTasks([...TasksCopy])
    };


    return (
        <>
        <div className={'flex justify-center mt-8'}>
                <div className={' h-96 m-w-20'}>

                    <div className={'flex p-4'}>
                        <div className={'w-2/3'}>
                            <input value={newTaskText}
                                   onChange={onTextChange}
                                   placeholder={'Add task...'}
                                   type="text"
                                   className={'border p-2 w-full'}/>
                        </div>

                        <div className={'w-20 flex justify-center'}>
                            <button onClick={addTask} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>Add</button>
                        </div>

                    </div>

                    <div className={'bg-gray-100 h-full p-2 mt-4'}>
                        <ul>
                            {Tasks.map((Task, idx) => {
                               return <li key={Task.text} className={'flex relative p-2 border-b-2 border-blue-100'}>
                                   <div className={'mr-4'}>
                                       <input type="checkbox" 
                                       checked={Task.completed}
                                       onChange={(event) => onCheckBoxChange(event, Task, idx)}/>
                                   </div>
                                   <div className={''}>
                                       {Task.text}
                                       <i onClick={(event) => onTaskDeleted(event, Task, idx)} className={'fa fa-trash absolute right-10 text-red-300 cursor-pointer'}/>
                                   </div>
                               </li>
                            })}
                        </ul>
                    </div>

                    <div className={'mt-2 w-max'}>
                        <h2 className={'font-semibold'}>Show Task</h2>
                        {(function() {
                            if (view.view==='all') {
                                return <button  onClick={allTasks} 
                                className={'border mr-1 px-2 py-2 rounded bg-blue-500 text-white font-semibold w-20'}>All</button>
                            } 
                            else if (view.view==='') {
                                return <button  onClick={allTasks} 
                                className={'border mr-1 px-2 py-2 rounded bg-blue-500 text-white font-semibold w-20'}>All</button>
                            }
                            else {
                                return <button  onClick={allTasks} 
                                className={'border mr-1 px-2 py-2 rounded bg-gray-200 text-gray-500 font-semibold w-20'}>All</button>
                            }
                            })()}     

                            {(function() {
                                if (view.view==='active') {
                                    return <button onClick={activeTasks}
                                    className={'border mr-1 px-2 py-2 rounded bg-blue-500 text-white font-semibold  w-20'}>
                                        Active</button>
                                } else {
                                    return       <button onClick={activeTasks} 
                                    className={'border mr-1 px-2 py-2 rounded bg-gray-200 text-gray-500 font-semibold  w-20'}>
                                        Active</button>
                                }
                                })()}     

                            {(function() {
                                if (view.view==='completed') {
                                    return <button onClick={completedTasks}
                                    className={'border mr-1 px-2 py-2 rounded bg-blue-500 text-white font-semibold  w-22'}>
                                        Completed</button>
                                } else {
                                    return       <button onClick={completedTasks} 
                                    className={'border mr-1 px-2 py-2 rounded bg-gray-200 text-gray-500 font-semibold w-22'}>
                                        Completed</button>
                                }
                                })()}    
                
                    </div>
                </div>

            </div>

        </>
    );
}

export default Todo;