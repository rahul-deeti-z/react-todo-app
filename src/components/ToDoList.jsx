import React from 'react';

export const ToDoList = (props) =>{
    return (
        <div className="todo_style">
            <li onClick={() => {
                props.onSelect(props.id)
            }}>{props.itemName}</li>
        </div>
    )
};

