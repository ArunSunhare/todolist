import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, onClose }) => {
  const [task, setTask] = useState('');
  const [important, setImportant] = useState(false);
  const [reminder, setReminder] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [repeat, setRepeat] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    const newTask = {
      task,
      important,
      reminder,
      dueDate,
      repeat,
      note,
    };
    onSubmit(newTask);
  };

  return (
    <div className="task-form-container">
      <div className="task-form-header">
        <h3>Add A Task</h3>
        <button onClick={onClose}>Close</button>
      </div>
      
      <div className="task-form-body">
        <input 
          type="text" 
          placeholder="Task Name" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />

        <div className="task-options">
          <label>
            <input 
              type="checkbox" 
              checked={important} 
              onChange={() => setImportant(!important)} 
            />
            Important
          </label>
          
          <label>
            Set Reminder
            <input 
              type="time" 
              value={reminder} 
              onChange={(e) => setReminder(e.target.value)} 
            />
          </label>
          
          <label>
            Due Date
            <input 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
            />
          </label>

          <label>
            Repeat
            <input 
              type="text" 
              placeholder="Repeat Frequency" 
              value={repeat} 
              onChange={(e) => setRepeat(e.target.value)} 
            />
          </label>

          <textarea 
            placeholder="Add Note" 
            value={note} 
            onChange={(e) => setNote(e.target.value)} 
          />
        </div>
        
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
