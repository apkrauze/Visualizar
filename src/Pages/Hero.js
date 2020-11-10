import React from 'react';
import { Link } from 'react-router-dom';


const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <Link to="/Profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>

            </nav>
            <header>
                
            </header>
        </section>
        
    )
}

export default Hero;