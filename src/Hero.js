import React from 'react';
import Upload from './Upload';


const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome {} </h2>
                <Upload/>
                <button onClick={handleLogout}>Logout</button>

            </nav>

        </section>
    )
}

export default Hero;