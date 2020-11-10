import {React, useEffect, useState} from 'react';
import logo from './logoBG.png';
import Preloader from './Preloader';
const Login = (props) => {
    const [preload, setPreload] = useState(false);

    const { 
        email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
            <div className="logo-contain">
                <img className="logo-login" src={logo} alt={'logo'}/>
            </div>
                <label>Email</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} placeholder="Email">

                </input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                type="password" 
                 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span></p>
                        </>
                    )}
                </div>
                
            </div>
        </section>
    )
}
export default Login;