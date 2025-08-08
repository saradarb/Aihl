import React, { useContext, useState } from 'react';
import "./Sidebar.css";
import {assets} from '../../assets/assets';
import { Context } from '../../context/Context';
import { Link } from 'react-router';


function Sidebar() {

    const[extended, setExtended] = useState(false);
    const {onSent, newChat, setRecentPrompt, prevPrompts} = useContext(Context);


    const loadPrompt = async (prompt) => {
       setRecentPrompt(prompt)
       await onSent(prompt)
    } 







  return (
  <div className="sidebar">
    <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className="Menu" src ={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat" >
            <img src={assets.plus_icon} alt=""/>
            {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
           <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index)=>{
                return (
                    <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                    <img src={assets.message_icon} alt=""/>
                    <p>{item.slice(0,18)}...</p>
                    </div>
                )
            })}
            
        </div>
        : null}
    
    </div>
    <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} />
            {extended ? <Link to="/Aihl/Help" style={{ textDecoration: "none", color: "inherit" }}>Help</Link> : null} 
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} />
            {extended ? <Link to="/Aihl/Settings" style={{ textDecoration: "none", color: "inherit" }}>Settings</Link> : null} 
        </div>

    </div>
  </div>
  )
}

export default Sidebar;

