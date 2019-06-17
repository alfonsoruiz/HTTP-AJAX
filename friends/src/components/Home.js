import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div className='home-wrapper'>
            <h1>Friend List</h1>
            <Link to='/friends'>Enter</Link>
        </div>
    );
}

export default Home;