import React, { useState } from "react";
import TodolistItem from './Todolistitem';
import './Todolist.css';

function Todolist() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'task1',
            text: 'test',
            completed: true
        },
        {
            id: 2,
            title: 'task2',
            text: 'test',
            completed: false
        }
    ]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskText, setNewTaskText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    function addTask(text, title) {
        const newTask = {
            id: Date.now(),
            title,
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
        setNewTaskTitle('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function editTask(task) {
        setIsEditing(true);
        setCurrentTask({ ...task });
        setNewTaskText(task.text);
        setNewTaskTitle(task.title);
    }

    function updateTask(text, title) {
        setTasks(tasks.map(task =>
            task.id === currentTask.id ? { ...task, text, title } : task
        ));
        setIsEditing(false);
        setNewTaskText('');
        setNewTaskTitle('');
        setCurrentTask(null);
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    return (
        <div className='Todolist'>
            {tasks.map(task => (
                <div key={task.id} className={isEditing && currentTask && currentTask.id === task.id ? 'edit-task' : 'todo'}>
                    {isEditing && currentTask && currentTask.id === task.id ? (
                        <>
                            <input
                                type="text"
                                value={newTaskTitle}
                                onChange={e => setNewTaskTitle(e.target.value)}
                                placeholder="Enter task title"
                            />
                            <input
                                type="text"
                                value={newTaskText}
                                onChange={e => setNewTaskText(e.target.value)}
                                placeholder="Enter task text"
                            />
                            <button onClick={() => updateTask(newTaskText, newTaskTitle)}>Update</button>
                        </>
                    ) : (
                        <>
                            <p className={task.completed ? 'completed' : ''}>{task.title}: {task.text}</p>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleCompleted(task.id)}
                                />
                                <button className="edit-btn" onClick={() => editTask(task)}>Edit</button>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
            <div className="add-task">
                <input className="text"
                    type="text"
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                    placeholder="Enter task title"
                />
                <input
                    type="text"
                    value={newTaskText}
                    onChange={e => setNewTaskText(e.target.value)}
                    placeholder="Enter task text"
                />
                <button onClick={() => addTask(newTaskText, newTaskTitle)}>Add</button>
            </div>
        </div>
    );
}

export default Todolist;
