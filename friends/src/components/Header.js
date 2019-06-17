import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className='header-wrapper'>
            <Link to='/friends'><h1>Friends List</h1></Link>
            <Link to='/form'>+ Add Friend</Link>
        </div>
    );
}

export default Header;