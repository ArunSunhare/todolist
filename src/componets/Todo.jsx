import React, { useState, useEffect } from 'react';



const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever they change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        priority,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="todolist">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add A Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            <span className={`task-text ${task.priority.toLowerCase()}`}>{task.text}</span>
            <span className="task-priority">{task.priority}</span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
