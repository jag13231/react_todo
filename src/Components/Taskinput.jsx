import React from 'react'
import { useState } from 'react';


const Taskinput = () => {
const [newTask,setNewTask]=useState ("");
const [tasks, setTasks]=useState([]);
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
    </>
  )
}

export default Taskinput