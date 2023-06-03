import React from 'react';
import "./style.scss"


const Login = () => {
    
  return (
    <div className="formContainer">
        <div className="formWrapper">
            
            <span><h2>Jatachat</h2></span><span><p>Login</p></span>
            <form className="formInput">
                <input type="text" placeholder="display name"/>
          
                <input type="password" placeholder="password" />

                <button>SIGN IN</button>
            </form>
            <p>You do not have account? Register</p>
        </div>
    </div>
  )
}

export default Login;