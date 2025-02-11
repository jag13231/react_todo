    import Header from './Header';
    import Taskinput from './Taskinput';
    import "../App.css"
    import { useState } from 'react';


    const Todolist = () => {
        const [newTask,setNewTask]=useState ("");
        const [tasks, setTasks]=useState([]);


    return (
    <>
    <div className="main_container">
    <Header 
    title="JAGAN TASKS"/>
    <Taskinput 
    newTask={newTask}
    setNewTask={setNewTask}
    tasks={tasks}
    setTasks={setTasks}
    
    />
    
 

   

    </div>
    </>
    )
    }

    export default Todolist