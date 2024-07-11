import React from 'react'
function Todolistitem({ task, deleteTask, toggleCompleted}){
  function handleChange(){
    toggleCompleted(task.id);
  }

  return (
  <div className='todo'>
    <input
    type='checkbox'
    checked={task.completed}
    onChange={handleChange}/>
    <p>{task.text}</p>
    <button onClick={() =>deleteTask(task.id)}>
      x
    </button>
  </div>
  );
}

export default Todolistitem;