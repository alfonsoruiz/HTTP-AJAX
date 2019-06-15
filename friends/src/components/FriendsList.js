import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const FriendsList = props => {
    return (
        <div className="friends-list-wrapper">
            <Header />  
            {props.friends.map(friend => (
                <Link to={`/friends/${friend.id}`} key={friend.id}>
                    <div className='friend-card'>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default FriendsList;