import { React } from "react";
import logo from "./logoBG.png";
import desktopMovie from './desktopCover.mp4';

const Login = (props) => {
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
    displayName,
    setDisplayName,
  } = props;

  return (
    <section className="login">
      <div className="dekstop-login-view">
        <video autoPlay muted loop id="myVideo">
          <source src={desktopMovie} type="video/mp4" />
        </video>
      </div>
      <div className="loginContainer">
        <div className="logo-contain">
          <img className="logo-login" src={logo} alt={"logo"} />
        </div>
        {!hasAccount ? (
          <>
            <label>Display name</label>
            <input
              type="text"
              autoFocus
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display name"
            ></input>
            <label>Email</label>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
            <p className="errorMsg">{passwordError}</p>
          </>
        ) : (
            <>
              <label>Email</label>
              <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              ></input>
              <p className="errorMsg">{emailError}</p>
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
              <p className="errorMsg">{passwordError}</p>
            </>
          )}

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
              </p>
            </>
          ) : (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>
                  Have an account?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
                </p>
              </>
            )}
        </div>
      </div>
    </section>
  );
};
export default Login;
