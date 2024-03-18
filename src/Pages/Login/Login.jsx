import React, {useState} from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");
  const [Newaction,NewsetAction] = useState("Author");

  return (
    <div className='main'>
    <div className="container">
      <div className='container2'>
        <h1 className='title'> Satyam </h1>
        <div className='para1'>Commence your publishing journey with us.</div>
        <div className='para2'>Explore boundless opportunities for sharing your research and ideas.</div>
      </div>
    </div>
      <div className="container">
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        {action==="Login"?<div></div>:<div className="forgot-password">Have an account? <san>Sign In</san></div>} 
        {/* {action==="Login"?<div></div>:<div className="forgot-password">Continue as?</div>}  */}
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Create a new account. <san>Sign Up</san></div>} 

        {/* {action==="Login"?<div></div>:<div className="account-type">
          <div className={Newaction==="Reviewer"?"submit gray":"submit"} onClick={()=>{NewsetAction("Author")}}>Author</div>
          <div className={Newaction==="Author"?"submit gray":"submit"} onClick={()=>{NewsetAction("Reviewer")}}>Reviewer</div>
        </div>}  */}
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="info">Name</div>}
          {action==="Login"?<div></div>:<div className="input">
            <input type="text" placeholder="Sahil Aggarwal" />
          </div>}
          
          <div className="info">Email Id</div>
          <div className="input">
            <input type="email" placeholder="sahilaggarwal2003@gmail.com" />
          </div>
  
          {action==="Login"?<div></div>:<div className="info">Mobile No.</div>}
          {action==="Login"?<div></div>:<div className="input">
            <input type="tel" placeholder="1234567890" />
          </div>}
  
          <div className="info">Password</div>
          <div className="input">
            <input type="password" placeholder='***************' />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <san>Click Here!</san></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
    
  )
}

export default LoginSignup
