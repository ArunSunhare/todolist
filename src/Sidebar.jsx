import React, { useState } from 'react';
import {
  FaUserCircle,
  FaTasks,
  FaPlusCircle,
  FaCalendarDay,
  FaStar,
  FaClipboardList
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onProfileClick, onLogoutClick, onTaskClick, pendingTasks, doneTasks }) => {
  const [activeTask, setActiveTask] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleTaskClick = (task) => {
    setActiveTask(task);
    onTaskClick(task);
  };

  const toggleProfileOptions = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Calculate the percentage for the pie chart
  const totalTasks = pendingTasks + doneTasks;
  const pendingPercentage = (pendingTasks / totalTasks) * 100;
  const donePercentage = (doneTasks / totalTasks) * 100;

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <FaUserCircle size={50} className="profile-photo" onClick={toggleProfileOptions} />
        {isProfileOpen && (
          <div className="profile-options">
            <button onClick={() => onProfileClick('myProfile')}>My Profile</button>
            <button onClick={() => onLogoutClick()}>Logout</button>
          </div>
        )}
      </div>

      {/* Tasks Section */}
      <div className="tasks-section">
        <h3>All Tasks</h3>
        <ul>
          <li
            className={activeTask === 'today' ? 'active' : ''}
            onClick={() => handleTaskClick('today')}
          >
            <FaCalendarDay /> Today
          </li>
          <li
            className={activeTask === 'important' ? 'active' : ''}
            onClick={() => handleTaskClick('important')}
          >
            <FaStar /> Important
          </li>
          <li
            className={activeTask === 'planned' ? 'active' : ''}
            onClick={() => handleTaskClick('planned')}
          >
            <FaClipboardList /> Planned
          </li>
          <li
            className={activeTask === 'assignedToMe' ? 'active' : ''}
            onClick={() => handleTaskClick('assignedToMe')}
          >
            <FaTasks /> Assigned to Me
          </li>
        </ul>
      </div>

      {/* Add List Section */}
      <div className="add-list-section">
        <button onClick={() => handleTaskClick('addList')}>
          <FaPlusCircle /> Add List
        </button>
      </div>

      {/* Pie Chart Section */}
      <div className="today-task-section">
        <h3>Today Task</h3>
        <div className="pie-chart-container">
          <div className="pie-chart">
            <div
              className="pie"
              style={{
                background: `conic-gradient(#4caf50 ${donePercentage}%, #f44336 ${donePercentage}% ${donePercentage + pendingPercentage}%)`
              }}
            ></div>
          </div>
          <div className="task-stats">
            <div className="dot done-dot"></div>
            <span>Done</span>
            <div className="dot pending-dot"></div>
            <span>Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
