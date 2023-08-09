import React, { useState } from 'react'
import '../css/App.css'
import ToDoList from '../ToDoList'

const Todo = () =>{

  const [curItem, setNewItem] = useState();
  const [addNewItem, setAddNewItem] = useState([]);

  const ChangeEvent = (e) =>{
    setNewItem(e.target.value)
  }
  const addItems = () =>{
    setAddNewItem((oldItem) => {
      return [...oldItem , curItem]
    })
    setNewItem("")
  }

  const delItem = (id) =>{
    console.log("deleted")
    setAddNewItem((oldItem) => {
      return oldItem.filter((arrElement, index) =>{
        return index !==id
      });
    });
 };

 const RemoveAll = () =>{
  setAddNewItem([])
 }
  return(
    <>

      <div className='main-div'>
        <div className='center-div'>
          <div className='inputDiv'>
          <input type='text' placeholder='✍ Write Task' onChange={ChangeEvent} value={curItem}/>
          <button onClick={addItems}>+</button>
          </div>
          <ol>
          {addNewItem.map((itemValue, index) => {
            return <ToDoList text = {itemValue} key = {index} id={index} onSelect={delItem} />
          })}
            
          </ol>
          <div className="allRemove">
            <button onClick={RemoveAll}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;