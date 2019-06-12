import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <div className="friends-list-wrapper">
            {props.friends.map(friend => (
                <Friend friend={friend}/>
            ))}
        </div>
    );
}

export default FriendsList;