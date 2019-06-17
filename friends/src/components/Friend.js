import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    const id = Number(props.match.params.id);
    const friend = props.friends.find(friend => friend.id === id);
    return (
        <div className='friend-wrapper'>
            <div className='friend-card'>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </div>
            <Link to='/update'><button>Update Friend</button></Link>
            <Link to='/delete'><button>Delete Friend</button></Link>
        </div>
    );
}

export default Friend