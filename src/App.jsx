import React from 'react';
import Form from './components/Form';
import SidebarDesk from './assets/images/bg-sidebar-desktop.svg';

function App() {
  return (
    <div className="container">
      <img src={SidebarDesk} alt="" />
      <div id="form">
        <Form />
      </div>
    </div>
  );
}

export default App;
