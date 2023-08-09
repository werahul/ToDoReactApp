import React, { useState } from 'react'
import './css/TodoStyle.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList = (props) => {
    const [line, setLine] = useState(false)
    const markItem = () => {
        setLine(true)

    }
    const unMark = () => {
        setLine(false)
    }
    return (
        <>
            <div className='todo-style'>
                <li style={{ "text-decoration": line ? "line-through" : "none" }}> {props.text}</li>
                    <CheckCircleIcon className='mark-btn' onClick={markItem} onDoubleClick={unMark} />
                    <DeleteForeverIcon className='delete-btn' onClick={() => {
                        props.onSelect(props.id)
                    }} />

            </div>
            <hr></hr>

        </>
    )
}

export default ToDoList;