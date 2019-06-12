import React from 'react';

const FriendForm = props => {
    return (
        <form method='post' className="friend-form">
            <div>
                <label for='name'>Name: </label>
                <input type='text' id='name' name='user_name' />
            </div>
            <div>
                <label for='age'>Age: </label>
                <input type='text' id='age' name='user_age'/>
            </div>
            <div>
                <label for='mail'>E-mail: </label>
                <input type='email' id='mail' name='user_mail'/>
            </div>

            <button type='submit'>Add Friend</button>
        </form>
    );
}

export default FriendForm;