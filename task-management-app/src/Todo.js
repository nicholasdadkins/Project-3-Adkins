import React, {useState, useEffect} from 'react';

// This is the only one that is left
// 3. Show All, Active and completed

function Todo(props) {

    const [newItemText, setNewItemText] = useState('');
    const [items, setItems] = useState([
        {text: 'Go to the grocery store', completed: false},
        {text: 'Feed pets', completed: false},
        {text: 'Garden', completed: false}
    ]);

    const [allItem, setAllItems] = useState([]);


    const onTextChange = async (event) => {
        setNewItemText(event.currentTarget.value)
    };

    const addItem = async () => {
        setItems([...items, {text: newItemText, completed: false}])
        setAllItems([...items, {text: newItemText, completed: false}])
        setNewItemText('')
    };
    
    const allItems = async () => {
        //setItems([...items, {text: newItemText, completed: false}])
        let itemsAll = allItem
        setItems([...itemsAll])
        setNewItemText('all')
    };

    const filterCompleted = [
        {
          predicateFn: allItem => allItem.completed == "true"
        }
      ];
    
      function getFilteredCompleted(filterCompleted) {
        return allItem.filter(p => filterCompleted.every(filter => filter.predicateFn(p)));
      }

    const activeItems = async () => {
        let itemsActive = getFilteredCompleted(filterCompleted)

    
        // itemsCopy.map((itemCopy, index) => {
        //     if(index == idx){
        //         itemCopy.completed = event.target.checked
        //     }
        // })
        setItems([...itemsActive])
        setNewItemText('active')
    };

    const completedItems = async () => {
        let itemsCopy = items.filter(items => items.completed == true)
    
        // itemsCopy.map((itemCopy, index) => {
        //     if(index == idx){
        //         itemCopy.completed = event.target.checked
        //     }
        // })
        setItems([...itemsCopy])
        setNewItemText('completed')
    };

    const onCheckBoxChange = async (event, item, idx) => {
        let itemsCopy = items
        itemsCopy.map((itemCopy, index) => {
            if(index == idx){
                itemCopy.completed = event.target.checked
            }
        })
        setItems([...itemsCopy])
    };

    const onItemDeleted = async (event, item, idx) => {
        let itemsCopy = []
        items.map((item, index) => {
            if(index != idx){
                itemsCopy.push(item)
            }
        })
        setItems([...itemsCopy])
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
                                       <input type="checkbox" onChange={(event) => onCheckBoxChange(event, item, idx)}/>
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
                        <button onClick={allItems} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>All</button>
                        <button onClick={activeItems} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>Active</button>
                        <button onClick={completedItems} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>Completed</button>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Todo;