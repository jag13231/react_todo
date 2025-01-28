import React, { useState } from 'react'
import "../App.css"
const Todolist = () => {
    const [tasks, setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
     setNewTask(event.target.value)
    }
    function addTask(){
        if (newTask.trim() !=="") {
            setTasks(t=>[...t,newTask]);
            setNewTask("")  
        }
  
    }

    function deleteTask(index) {
           const updatedTasks= tasks.filter((_,i)=>i !== index);
           setTasks(updatedTasks)
           
               }
   

  return (
    <>
      <div className="main_container">
      <h1>JAGAN TASKS</h1>
      <div className="task_container">
        <input type="text"
        placeholder='Enter a task'
        value={newTask}
        onChange={handleInputChange}
        />
        <button onClick={addTask}>+</button>
      </div>
      
      <ol>
       
        {tasks.map((tasks,index)=>
        <li key={index}>
            <span className='text'>
                {tasks}
            </span>
        <button className='DeleteButton' onClick={()=>deleteTask(index)}>X</button>
        </li>
        )}
      </ol>

    </div>
    </>
  )
}

export default Todolist