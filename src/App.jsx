import React, { useState } from 'react'
import './App.css'
import {ToDoList} from './components/ToDoList'
const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    
    const addItemEvent = (event) =>{
        setInputList(event.target.value);
    }
   
    const listOfItems = () => {
        setItems((oldItemsList) =>{
            return [...oldItemsList, inputList]
        })
        setInputList("");
    }
    const deleteItem = (id) => {
         setItems((oldItemsList) =>{
            return oldItemsList.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (<>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 id="title">ToDo List</h1>
                <br/>
                <input value={inputList} id="input-button" type="text" placeholder="Add an Item" onChange={addItemEvent}/>
                <button id="add-button" onClick={listOfItems}>+</button>
                <ol>
                   { items.map((item, index) => {
                       return <ToDoList 
                            itemName = {item}
                            key = {index}
                            id = {index}
                            onSelect = {deleteItem}
                        />
                    })
                }
                {/* if you want to write javascript inside jsx then you should include
                the whole js code inside curly braces */}
                </ol>
            </div>
        </div>
            </>
    );
};

export default App;