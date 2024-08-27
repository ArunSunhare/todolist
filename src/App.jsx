
import React, { useState } from 'react';
import Navbar from './componets/Navbar';
import Sidebar from './Sidebar';
import Todo from './componets/Todo.jsx';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProfileClick = (action) => {
    if (action === 'myProfile') {
      console.log('Navigating to My Profile');
    }
  };

  const handleLogoutClick = () => {
    console.log('Logging out...');
  };

  const handleTaskClick = (task) => {
    console.log(`Selected task: ${task}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {isSidebarOpen && (
          <Sidebar
            onProfileClick={handleProfileClick}
            onLogoutClick={handleLogoutClick}
            onTaskClick={handleTaskClick}
          />
        )}
        <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
          {/* Main content goes here */}
          <Todo/>
        </div>
      </div>
    </div>
  );
};

export default App;

