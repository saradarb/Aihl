import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import '../style.css';

function AiChat() {
  return (
    <div>
     <div className="app-container">
     <Sidebar />
     <Main />
   </div>
   </div>
  )
}

export default AiChat