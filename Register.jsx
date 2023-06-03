import React from 'react'


const Register = () => {
    
  return (
    <div className="formContainer">
        <div className="formWrapper">
            
            <span><h2>Jatachat</h2></span><span><p>Register</p></span>
            <form className="formInput">
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="file" />
                <button>SIGN UP</button>
            </form>
            <p>You do have account? Login</p>
        </div>
    </div>
  )
}

export default Register;