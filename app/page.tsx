"use client"
import { useState } from "react";
import "../app/style.css";


export default function Home() {
  const [task, setTask] = useState<string>(""); // Task input state
  const [tasks, setTasks] = useState<string[]>([]); // Task list state

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // Add the new task to the tasks array
      setTask(""); // Clear the input field
    }
  };

  return (
    <div className="container">
      <div>
      <h1 className="custom-class"><strong><b>ToDo Application</b></strong></h1><br/>
      </div>
      <h2 className="custom-class-1"><strong>By : Insha Abbas</strong></h2>                                        
      <input 
        type="text"
        placeholder="Type your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input"
      />
      <button onClick={addTask} className="button">
        Add  New Task
      </button>
      <ul className="tasklist">
        {tasks.map((t, index) => (
          <li key={index} className="taskItem">
            {t}
            <button
              onClick={() => {
                const updatedTasks = tasks.filter((_, i) => i !== index);
                setTasks(updatedTasks); // Remove task
              }}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
