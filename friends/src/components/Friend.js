import React from 'react';

const Friend = ({ friends, match, setUpdateForm }) => {
    const friend = friends.find(friend => `${friend.id}` === match.params.id);
    
    return (
        <div className='friend-wrapper'>
            <div className='friend-card'>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </div>
            <button onClick={event => setUpdateForm(event, friend)}>
                Update Friend
            </button>
        </div>
    );
}

export default Friend