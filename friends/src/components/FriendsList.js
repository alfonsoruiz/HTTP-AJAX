import React from 'react';

const FriendsList = props => {
    return (
        <div className="friends-list-wrapper">
            {props.friends.map(friend => (
                <div className='friend-card' key={friend.id} onClick={() => routeToFriend(props, friend)}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    );
}

// Window alternative to using the Link component to navigate from one place to another. 
function routeToFriend(props, friend) {
    props.history.push(`/friends/${friend.id}`)
}

export default FriendsList;