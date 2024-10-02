import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index} = props
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
                <button><i className="fa-solid fa-trash" onClick={() => {
                    handleDeleteTodo(index)
                }}></i></button>
            </div>
        </li>
    )
}
