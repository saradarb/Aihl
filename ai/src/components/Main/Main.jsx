import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import Face3Icon from '@mui/icons-material/Face3';
import { Link } from 'react-router'




function Main() {

    const {onSent, 
        recentPrompt, 
        showResult, 
        laoding, 
        resultData, 
        setInput, 
        input} 
        = useContext(Context)

    






  return (
    <div className='main'>
        <div className="nav">
        <Link className="nav-logo" to="/Aihl" style={{ textDecoration: 'none'}}>Veritas AI</Link>
            <img src={assets.robologo} alt="" />
        </div>
        <div className="main-container">

            {!showResult ? 
            <>
            <div className="greet">
                <p><span>Hello,</span></p>
                <p>How can I help you Today?</p>
            </div>
            </> 
            : <div className="result">
                <div className="result-title">
                <Face3Icon />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.robologo} alt="" />
                    {laoding
                    ?<div className="loader"> 
                    <hr />
                    <hr />
                    <hr />
                    </div> 
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                </div>
            </div>
             }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Entre a prompt here"/>
                    <div>
                        {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
              

            </div>


        </div>
    </div>
  )
}

export default Main