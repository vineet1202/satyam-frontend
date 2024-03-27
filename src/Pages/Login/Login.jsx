import React, {useState} from 'react'
import './Login.css'

const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className='main'>
      <div className="container">
        <div className='container2'>
          <h1 className='title'> Satyam </h1>
          <div className='para1'>Commence your publishing journey with us.</div>
          <div className='para2'>Explore boundless opportunities for sharing your research and ideas.</div>
          <div className="data">
            Easier the path to sharing your research and insights with the world and insights with the world.
          </div>
        </div>
      </div>
      <div className="container">
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        {action==="Login"?<div></div>:<div className="forgot-password">Have an account? <san onClick={()=>{setAction("Login")}}>Sign In</san></div>}
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Create a new account. <san onClick={()=>{setAction("Sign Up")}}>Sign Up</san></div>} 

        <div className="inputs">
          {action==="Login"?<div></div>:<div className="info">Name</div>}
          {action==="Login"?<div></div>:<div className="input">
            <input type="text" placeholder="Sahil Aggarwal" />
          </div>}
          
          <div className="info">Email Id</div>
          <div className="input">
            <input type="email" placeholder="sahilaggarwal2003@gmail.com" />
          </div>
  
          {action==="Login"?<div></div>:<div className="info">Alternate Email Id</div>}
          {action==="Login"?<div></div>:<div className="input">
            <input type="email" placeholder="aggarwalsahil2004@gmail.com" />
          </div>}
  
          <div className="info">Password</div>
          <div className="input">
            <input type="password" placeholder='***************' />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <san>Click Here!</san></div>}
        
        {action==="Login"?<div></div>:<div className="submit">Sign Up</div>}
        {action==="Sign Up"?<div></div>:<div className="submit">Sign In</div>} 
      </div>
    </div>
  )
}
export default LoginSignup