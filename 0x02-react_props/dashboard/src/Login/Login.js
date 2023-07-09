import React from 'react';
import './Login.css';


function Login() {
    return (
        <React.Fragment>
             <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
        <label htmlFor='email'> Email: <input type='text' name='email'/> </label>
        <label htmlFor='password'> Password: <input type='text' name='password'/> </label>
        <button className='Ok-button' type='submit'>OK</button>
        </form>
      </div>

      </React.Fragment>
    );
}

export default Login;