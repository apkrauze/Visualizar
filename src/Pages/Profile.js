import React from 'react';
import { Link } from 'react-router-dom';


const Profile = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <Link to="/Hero">Home</Link>
            </nav>
            <header>
                
            </header>
        </section>
        
    )
}

export default Profile;