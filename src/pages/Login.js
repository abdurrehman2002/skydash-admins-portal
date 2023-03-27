import React from 'react'
import {
    Link
} from "react-router-dom";
import Logo from '../components/Logo';


function Login() {
    return (
        <div className='loginWrapper' >
            <div className='loginContentWrapper'>
                <Logo marginBottom="60px" />
                <h6>Hello! let's get started</h6>
                <p>Sign in to continue.</p>
                <form className='loginForm'>
                    <div className='loginInputs'>
                        <input type="email" class="form-control" placeholder='Username' />
                        <input type="email" class="form-control" placeholder='Password' />
                    </div>

                    <button class="btn">Login</button>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Keep me sign in</label>
                        <a href='#'>Forget password?</a>
                    </div>
                </form>
                <div className='createAcount'>
                    <p>Don't have an account?</p>
                    <a href='#'>Create</a>
                </div>
            </div>
        </div>
    )
}
export default Login;
