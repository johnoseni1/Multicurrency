import React from 'react'
import './style.css'

const Login = () => {

    return(
            <div>
                <div>
                    <form className='login-form'>
                        <input placeholder='Your email' type='email' /><br /><br />
                        <input placeholder='Yor password' type='password' /><br /><br />
                        <button href="/wallet">Login</button><br /><br />
                        <span>Not having an account yet? <a href='/signup'>Sign Up</a></span>
                    </form>
                </div>
            </div>

    )
}

export default Login;