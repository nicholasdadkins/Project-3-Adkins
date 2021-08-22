import React, {useState, useEffect} from 'react';

function Todo(props) {
    
    const [newItemText, setNewItemText] = useState('');
    const [items, setItems] = useState([
        {text: 'Go to the grocery store', completed: false},
        {text: 'Feed pets', completed: false},
        {text: 'Garden', completed: false}
    ]);

    const [allItem, setAllItems] = useState([
        {text: 'Go to the grocery store', completed: false},
        {text: 'Feed pets', completed: false},
        {text: 'Garden', completed: false}
    ]);


    const onTextChange = async (event) => {
        setNewItemText(event.currentTarget.value)
    };

    const addItem = async () => {
        setItems([...items, {text: newItemText, completed: false}])
        setAllItems([...items, {text: newItemText, completed: false}])
        setNewItemText('')
    };
    
    const filterCompleted = [
        {
          predicateFn: allItem => allItem.completed === "true" 
        }
      ];

      const filterActive = [
        {
          predicateFn: allItem => allItem.completed === "false" 
        }
      ];

      function getFilteredCompleted(filterCompleted) {
        return allItem.filter(p => filterCompleted.every(filter => filter.predicateFn(p)));
      }
      function getFilteredActive(filterActive) {
        return allItem.filter(p => filterActive.every(filter => filter.predicateFn(p)));
      }


    const allItems = async () => {
        let itemsAll = allItem
        setItems([...itemsAll])
        setNewItemText('all')
    };


    const activeItems = async () => {
        let itemsCopy = allItem.filter(items => items.completed === false)
        setItems([...itemsCopy])
        setNewItemText('active')
        
    };

    const completedItems = async () => {
        let itemsCopy = allItem.filter(items => items.completed === true)
        setItems([...itemsCopy])
        setNewItemText('completed')
    };

    const onCheckBoxChange = async (event, item, idx) => {
        let itemsCopy = items
        itemsCopy.map((itemCopy, index) => {
            if(index === idx){
                itemCopy.completed = event.target.checked
            }
        })
        setItems([...itemsCopy])
        setAllItems([...itemsCopy])
    };

    const onItemDeleted = async (event, item, idx) => {
        let itemsCopy = []
        items.map((item, index) => {
            if(index !== idx){
                itemsCopy.push(item)
            }
        })
        setItems([...itemsCopy])
        setAllItems([...itemsCopy])
    };

    return (
        <>
        <div className={'flex justify-center mt-20'}>
                <div className={' h-96 w-1/3'}>

                    <div className={'flex p-4'}>
                        <div className={'w-2/3'}>
                            <input value={newItemText}
                                   onChange={onTextChange}
                                   placeholder={'Add task...'}
                                   type="text"
                                   className={'border p-2 w-full'}/>
                        </div>

                        <div className={'w-1/3 flex justify-center'}>
                            <button onClick={addItem} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>Add</button>
                        </div>

                    </div>

                    <div className={'bg-gray-100 h-full p-2 mt-4'}>
                        <ul>
                            {items.map((item, idx) => {
                               return <li className={'flex relative p-2 border-b-2 border-blue-100'}>
                                   <div className={'mr-4'}>
                                       <input type="checkbox" 
                                       checked={item.completed}
                                       onChange={(event) => onCheckBoxChange(event, item, idx)}/>
                                   </div>
                                   <div className={''}>
                                       {item.text}
                                       <i onClick={(event) => onItemDeleted(event, item, idx)} className={'fa fa-trash absolute right-10 text-red-300 cursor-pointer'}/>
                                   </div>
                               </li>
                            })}
                        </ul>
                    </div>

                    <div className={'mt-4'}>
                        <h2 className={'font-semibold'}>Show</h2>
                        <button onClick={allItems} className={'mt-2 mr-4 px-8 py-2 rounded bg-blue-500 text-white'}>All</button>
                        <button onClick={activeItems} className={'border mr-4 px-8 py-2 rounded bg-gray-200 text-gray-500 font-semibold'}>Active</button>
                        <button onClick={completedItems} className={'border px-8 py-2 rounded bg-gray-200 text-gray-500 font-semibold'}>Completed</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Todo;