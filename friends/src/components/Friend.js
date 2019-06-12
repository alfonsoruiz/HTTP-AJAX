import React from 'react';

const Friend = props => {
    return (
        <div className="friend-card">
            <div key={props.friend.id}>
                <h2>{props.friend.name}</h2>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
            </div>
        </div>
    );
}

export default Friend